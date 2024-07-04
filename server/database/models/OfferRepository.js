const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "offer" });
  }
  //   async readAll() {
  //     // Execute the SQL SELECT query to retrieve all items from the "item" table
  //     const [rows] = await this.database.query(`select c.*, o.*, DATE_FORMAT(o.date, '%d-%m-%Y') as date from ${this.table} as o
  // INNER JOIN operation ON id_offer = id_offer_fk
  // INNER JOIN account ON id_account_fk = id_account
  // INNER JOIN company AS c ON id_company_fk = id_company`);

  //     // Return the array of items
  //     return rows;
  //   }

  async readAll() {
    // 1. Récupérer le tableau initial d'objets
    const [rows] = await this.database.query(`
      SELECT c.*, o.*, DATE_FORMAT(o.date, '%d-%m-%Y') as date 
      FROM ${this.table} as o
      INNER JOIN operation ON id_offer = id_offer_fk
      INNER JOIN account ON id_account_fk = id_account
      INNER JOIN company AS c ON id_company_fk = id_company
  `);

    // 2. Itérer sur chaque objet du tableau initial
    for (let i = 0; i < rows.length; i++) {
      const offer = rows[i];

      // 3. Exécuter la requête pour récupérer les disabilities correspondantes
      const [offer_disability] = await this.database.query(
        `
          SELECT od.*, d.pictogram
          FROM offer_disability AS od
          INNER JOIN disability AS d ON od.id_disability_fk = d.id_disability
          WHERE od.id_offer_fk = ?
      `,
        [offer.id_offer]
      );

      // 4. Ajouter les résultats de la deuxième requête en tant que clé à l'objet
      offer.offer_disability = offer_disability;
    }

    return rows;
  }

  async read(id) {
    // Fonction utilitaire pour formater la date
    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Les mois commencent à 0 dans JavaScript
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
    // Exécutez la requête SQL avec le paramètre 'id'
    const [rows] = await this.database.query(
      `SELECT o.*, c.*
FROM ${this.table} AS o
INNER JOIN operation ON o.id_offer = operation.id_offer_fk
INNER JOIN account ON operation.id_account_fk = account.id_account
INNER JOIN company AS c ON account.id_company_fk = c.id_company
WHERE o.id_offer = (?);`,
      [id]
    );
    // Traitement de la date dans JavaScript
    let result = rows[0];

    result.date = formatDate(result.date); // Appel à une fonction pour formater la date

    const [rows2] = await this.database.query(
      `SELECT od.*, d.pictogram
FROM offer_disability AS od
INNER JOIN disability AS d ON od.id_disability_fk = d.id_disability
WHERE od.id_offer_fk = ?`,
      [id]
    );

    result = rows[0];
    result.offer_disability = rows2;

    // Return the first row of the result, which represents the item
    return result;
  }

  // async readByFilter(req) {
  //   console.log(req.body);
  //   const { job, sector, location, contract, disability } = req.body;

  //   // Base de la requête
  //   let query = `SELECT o.* FROM ${this.table} o
  //              LEFT JOIN offer_disability AS od ON o.id_offer = od.id_offer_fk WHERE 1=1 `;
  //   let queryParams = [];

  //   // Ajoutez des conditions à la requête en fonction des filtres fournis
  //   if (job) {
  //     query += `AND o.name LIKE ?`;
  //     queryParams.push(`%${job}%`);
  //   }
  //   if (sector) {
  //     query += " AND o.id_sector_fk = ?";
  //     queryParams.push(parseInt(sector));
  //   }
  //   if (location) {
  //     query += " AND o.location LIKE ?";
  //     queryParams.push(`%${location}%`);
  //   }
  //   if (contract && Object.keys(contract).length > 0) {
  //     const contractConditions = Object.keys(contract).map(
  //       (key) => "o.contract = ?"
  //     );
  //     query += " AND (" + contractConditions.join(" OR ") + ")";
  //     queryParams.push(...Object.values(contract));
  //   }
  //   if (disability && Object.keys(disability).length > 0) {
  //     const disabilityIds = Object.entries(disability).map(
  //       ([key, value]) => value
  //     );
  //     const placeholders = disabilityIds.map(() => "?").join(",");
  //     query += ` AND od.id_disability_fk IN (${placeholders})`;
  //     queryParams.push(...disabilityIds);
  //   }

  //   try {
  //     console.log("requete =>", query, queryParams);
  //     // Exécutez la requête avec les paramètres
  //     const [rows, fields] = await this.database.query(query, queryParams);
  //     return rows;
  //   } catch (error) {
  //     console.error("Error executing query:", error);
  //     res.status(500).json({ error: "An error occurred while fetching jobs" });
  //   }
  // }

//   async readByFilter(req, res) {
//     console.log(req.body);
//     const { job, sector, location, contract, disability } = req.body;

//     // Base de la requête
//     let query = `SELECT c.*, o.* FROM ${this.table} o
//                  INNER JOIN operation ON o.id_offer = operation.id_offer_fk
//                  INNER JOIN account ON account.id_account = operation.id_account_fk
//                  INNER JOIN company AS c ON c.id_company = account.id_company_fk
//                  LEFT JOIN offer_disability AS od ON o.id_offer = od.id_offer_fk
//                  WHERE 1=1 `;
//     let queryParams = [];

//     // Ajoutez des conditions à la requête en fonction des filtres fournis
//     if (job) {
//         query += ` AND o.title LIKE ?`;
//         queryParams.push(`%${job}%`);
//     }
//     if (sector) {
//         query += ' AND o.id_sector_fk = ?';
//         queryParams.push(parseInt(sector));
//     }
//     if (location) {
//         query += ' AND o.location LIKE ?';
//         queryParams.push(`%${location}%`);
//     }
//     if (contract && Object.keys(contract).length > 0) {
//         const contractConditions = Object.keys(contract).map(() => 'o.contract = ?');
//         query += ' AND (' + contractConditions.join(' OR ') + ')';
//         queryParams.push(...Object.values(contract));
//     }
//     if (disability && Object.keys(disability).length > 0) {
//         const disabilityIds = Object.values(disability);
//         const placeholders = disabilityIds.map(() => '?').join(',');
//         query += ` AND od.id_disability_fk IN (${placeholders})`;
//         queryParams.push(...disabilityIds);
//     }

//     console.log('Constructed query:', query);
//     console.log('Query parameters:', queryParams);

//     try {
//         // Exécutez la requête avec les paramètres
//         const [rows] = await this.database.query(query, queryParams);

//         // Maintenant, pour chaque ligne (row) dans le résultat,
//         // récupérons les disabilities associées et ajoutons-les à chaque objet
//         for (let i = 0; i < rows.length; i++) {
//             const offer = rows[i];

//             // Récupérer les disabilities pour cette offre
//             const [offer_disability] = await this.database.query(`
//                 SELECT od.*, d.pictogram
//                 FROM offer_disability AS od
//                 INNER JOIN disability AS d ON od.id_disability_fk = d.id_disability
//                 WHERE od.id_offer_fk = ?
//             `, [offer.id_offer]);

//             // Ajouter les disabilities au résultat de la requête
//             offer.offer_disability = offer_disability;
//         }

//         return rows;
//     } catch (error) {
//         console.error('Error executing query:', error);
//         res.status(500).json({ error: 'An error occurred while fetching jobs' });
//     }
// }

async readByFilter(req, res) {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois commencent à 0 dans JavaScript
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  console.log(req.body);
  const { job, sector, location, contract, disability } = req.body;

  // Base de la requête
  let query = `SELECT c.*, o.*, DATE_FORMAT(o.date, '%d-%m-%Y') as date FROM ${this.table} o
               INNER JOIN operation ON o.id_offer = operation.id_offer_fk
               INNER JOIN account ON account.id_account = operation.id_account_fk
               INNER JOIN company AS c ON c.id_company = account.id_company_fk
               LEFT JOIN offer_disability AS od ON o.id_offer = od.id_offer_fk
               WHERE 1=1 `;
  let queryParams = [];

  // Ajoutez des conditions à la requête en fonction des filtres fournis
  if (job) {
      query += ` AND o.title LIKE ?`;
      queryParams.push(`%${job}%`);
  }
  if (sector) {
      query += ' AND o.id_sector_fk = ?';
      queryParams.push(parseInt(sector));
  }
  if (location) {
      query += ' AND o.location LIKE ?';
      queryParams.push(`%${location}%`);
  }
  if (contract && Object.keys(contract).length > 0) {
      const contractConditions = [];
      Object.keys(contract).forEach(key => {
          contractConditions.push('o.contract LIKE ?');
          queryParams.push(`%${contract[key]}%`);
      });
      query += ' AND (' + contractConditions.join(' OR ') + ')';
  }
  if (disability && Object.keys(disability).length > 0) {
      const disabilityIds = Object.values(disability);
      const placeholders = disabilityIds.map(() => '?').join(',');
      query += ` AND od.id_disability_fk IN (${placeholders})`;
      queryParams.push(...disabilityIds);
  }

  console.log('Constructed query:', query);
  console.log('Query parameters:', queryParams);

  try {
      // Exécutez la requête avec les paramètres
      const [rows] = await this.database.query(query, queryParams);

      // Maintenant, pour chaque ligne (row) dans le résultat,
      // récupérons les disabilities associées et ajoutons-les à chaque objet
      for (let i = 0; i < rows.length; i++) {
          const offer = rows[i];

          // Récupérer les disabilities pour cette offre
          const [offer_disability] = await this.database.query(`
              SELECT od.*, d.pictogram
              FROM offer_disability AS od
              INNER JOIN disability AS d ON od.id_disability_fk = d.id_disability
              WHERE od.id_offer_fk = ?
          `, [offer.id_offer]);

          // Ajouter les disabilities au résultat de la requête
          offer.offer_disability = offer_disability;
      }

      return rows;
  } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'An error occurred while fetching jobs' });
  }
}



}

module.exports = ItemRepository;

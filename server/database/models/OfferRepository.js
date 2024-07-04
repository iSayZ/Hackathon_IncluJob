const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "offer" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readByFilter(req) {
    console.log(req.body)
    const { job, sector, location, contract, disability } = req.body;

    // Base de la requête
    let query = `SELECT * FROM ${this.table} WHERE 1=1 `;
    let queryParams = [];
  
    // Ajoutez des conditions à la requête en fonction des filtres fournis
    if (job) {
      query +=  `AND name LIKE ?`;
      queryParams.push(`%${job}%`);
    }
    if (sector) {
      query += ' AND id_sector_fk = ?';
      queryParams.push(parseInt(sector));
    }
    if (location) {
      query += ' AND location LIKE ?';
      queryParams.push(`%${location}%`);
    }
    if (contract && Object.keys(contract).length > 0) {
      const contractConditions = Object.keys(contract).map(key => 'contract = ?');
      query += ' AND (' + contractConditions.join(' OR ') + ')';
      queryParams.push(...Object.values(contract));
  }
    if (disability) {
      query += ' AND id_disability_fk = ?';
      queryParams.push(disability);
    }
    
    try {
      console.log("requete =>", query, queryParams)
      // Exécutez la requête avec les paramètres
      const [rows, fields] = await this.database.query(query, queryParams);
      return rows;
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'An error occurred while fetching jobs' });
    }
}
}

module.exports = ItemRepository;

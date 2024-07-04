CREATE TABLE disability (
  id_disability INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100) NOT NULL UNIQUE,
  pictogram VARCHAR(150) NOT NULL
);

CREATE TABLE company (
  id_company INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100) NOT NULL,
  logo VARCHAR(400) NOT NULL
);

CREATE TABLE user (
  id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  id_disability_fk INT NOT NULL,
  FOREIGN KEY (id_disability_fk) REFERENCES disability(id_disability)
);

CREATE TABLE account (
  id_account INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(250) NOT NULL,
  assignement VARCHAR(100) NOT NULL,
  id_user_fk INT NOT NULL,
  id_company_fk INT NOT NULL,
  FOREIGN KEY (id_user_fk) REFERENCES user(id_user),
  FOREIGN KEY (id_company_fk) REFERENCES company(id_company)
);

CREATE TABLE sector (
  id_sector INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE offer (
  id_offer INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  contract VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  salary VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  id_disability_fk INT NOT NULL,
  id_sector_fk INT NOT NULL,
  FOREIGN KEY (id_disability_fk) REFERENCES disability(id_disability),
  FOREIGN KEY (id_sector_fk) REFERENCES sector(id_sector)
);

CREATE TABLE operation (
  id_operation INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  date DATE NOT NULL,
  kind VARCHAR(100) NOT NULL,
  id_account_fk INT NOT NULL,
  id_offer_fk INT NOT NULL,
  FOREIGN KEY (id_account_fk) REFERENCES account(id_account),
  FOREIGN KEY (id_offer_fk) REFERENCES offer(id_offer)
);

INSERT INTO disability (name, pictogram) VALUES
('Handicap Moteur', '/assets/images/icons/disabled.svg'),
('Handicap Visuel', '/assets/images/icons/deafness.svg'),
('Handicap Auditif', '/assets/images/icons/unseen.svg'),
('Handicap Psychique', '/assets/images/icons/creative.svg'),
('Déficience Intellectuelle', '/assets/images/icons/brain.svg'),
('Maladies Invalidantes', '/assets/images/icons/health.svg');

INSERT INTO company (name, logo) VALUES
('Leroy Merlin', 'https://dirigeants-entreprise.com/content/uploads/leroy-merlin-logo.jpg'),
('Auchan', 'https://logo-marque.com/wp-content/uploads/2021/02/Auchan-Logo-650x366.png'),
('IBM', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/600px-Amazon_icon.svg.png'),
('SNCF', 'https://static.wixstatic.com/media/524f8a_10138be54f284930af8a0b8132912e78~mv2.png/v1/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Staccato_planche_logo_Garac.png');

INSERT INTO user (firstname, lastname, id_disability_fk) VALUES
('Jean', 'Dupont', 1),
('Marie', 'Curie', 2),
('Pierre', 'Martin', 3),
('Sophie', 'Leroy', 4),
('Luc', 'Bernard', 5),
('Claire', 'Moreau', 6);

INSERT INTO sector (name) VALUES
('Commerce'),
('Vente'),
('Hôtellerie'),
('Restauration'),
('Tourisme'),
('Informatique'),
('Télécoms'),
('Tech'),
('Banque'),
('Assurance'),
('Finance'),
('Formation'),
('Recrutement'),
('Communication'),
('Marketing'),
('Distribution'),
('Grande consommation'),
('Direction'),
('Administration'),
('Santé'),
('Social'),
('Culture'),
('Média'),
('Divertissement'),
('Ingénierie'),
('BTP'),
('Urbanisme'),
('Autre fonction');

INSERT INTO account (email, password, assignement, id_user_fk, id_company_fk) VALUES 
('john.doe@example.com', 'securepassword123', 'user', 1, 1),
('jane.smith@example.com', 'anothersecurepassword456', 'admin', 2, 2);

INSERT INTO offer (date, contract, name, location, salary, content, id_disability_fk, id_sector_fk) VALUES
('2023-06-01', 'CDI', 'Développeur Web', 'Lille, France', '35,000 - 45,000 €', 'Nous recherchons un(e) Développeur(se) Web talentueux(se) pour rejoindre notre équipe à Lille. Vous serez responsable de la conception, du développement et de la maintenance de sites web et d\'applications web. Responsabilités : Développer et maintenir des applications web performantes et évolutives Collaborer avec l\'équipe de conception pour créer des interfaces utilisateur intuitives Assurer la compatibilité des applications avec les différents navigateurs et appareils Optimiser les performances des sites web Participer aux revues de code et aux tests Qualifications requises : Diplôme en informatique ou un domaine connexe Expérience de 3 ans minimum en développement web Maîtrise des langages de programmation web (HTML, CSS, JavaScript) Connaissance des frameworks (React, Angular, Vue.js) Capacité à travailler en équipe et à respecter les délais Handicaps les plus adaptés pour ce poste : Handicap auditif Handicap moteur léger Troubles de l\'apprentissage', 1, 1),
('2023-06-01', 'CDD', 'Assistant Administratif', 'Roubaix, France', '24,000 - 28,000 €', 'Nous recherchons un(e) Assistant(e) Administratif(ve) pour soutenir notre équipe à Roubaix. Vous serez en charge de diverses tâches administratives et de soutien opérationnel. Responsabilités : Gestion des appels téléphoniques et des courriels Préparation des documents administratifs et des présentations Organisation des réunions et gestion des agendas Suivi des dossiers et classement des documents Accueil des visiteurs et gestion des fournitures de bureau Qualifications requises : Diplôme en administration, gestion ou un domaine connexe Expérience de 2 ans minimum dans un poste similaire Bonne maîtrise des outils bureautiques (Word, Excel, PowerPoint) Excellentes compétences organisationnelles et relationnelles Capacité à travailler de manière autonome et en équipe Handicaps les plus adaptés pour ce poste : Handicap auditif Handicap moteur léger Troubles de l\'apprentissage', 2, 2),
('2023-06-01', 'REMOTE', 'Chargé de Communication', 'Valenciennes, France', '32,000 - 38,000 €', 'Nous recherchons un(e) Chargé(e) de Communication pour développer et mettre en œuvre des stratégies de communication efficaces à Valenciennes. Responsabilités : Élaboration et mise en œuvre des plans de communication Rédaction de contenus pour les supports de communication (communiqués de presse, articles, réseaux sociaux) Gestion des relations avec les médias et les partenaires Organisation d\'événements et de campagnes de communication Suivi et analyse des retombées des actions de communication Qualifications requises : Diplôme en communication, marketing ou un domaine connexe Expérience de 3 ans minimum dans un poste similaire Excellentes compétences rédactionnelles et relationnelles Maîtrise des outils de communication digitale et des réseaux sociaux Créativité et capacité à travailler en équipe Handicaps les plus adaptés pour ce poste : Handicap auditif Handicap moteur léger Troubles de l\'apprentissage', 3, 3),
('2023-06-01', 'CDI', 'Ingénieur en Génie Civil', 'Dunkerque, France', '45,000 - 55,000 €', 'Nous cherchons un(e) Ingénieur(e) en Génie Civil pour superviser nos projets de construction et d\'infrastructure à Dunkerque. Responsabilités : Conception et planification des projets de construction Supervision des travaux et coordination des équipes sur le chantier Contrôle de la qualité et respect des normes de sécurité Gestion des budgets et des délais Communication avec les clients et les partenaires Qualifications requises : Diplôme en génie civil ou un domaine connexe Expérience de 5 ans minimum dans un poste similaire Connaissance des logiciels de CAO/DAO (AutoCAD, Revit, etc.) Excellentes compétences en gestion de projet Capacité à résoudre les problèmes et à prendre des décisions rapides Handicaps les plus adaptés pour ce poste : Handicap auditif Handicap moteur léger Troubles de l\'apprentissage', 4, 4),
('2023-06-01', 'CDI', 'Responsable RH', 'Lille, France', '50,000 - 60,000 €', 'Nous recherchons un(e) Responsable RH pour diriger notre département des ressources humaines à Lille. Responsabilités : Développement et mise en œuvre des politiques RH Gestion du recrutement et de l\'intégration des nouveaux employés Supervision de la formation et du développement des compétences Gestion des relations sociales et des conflits internes Suivi de la performance et évaluation des employés Qualifications requises : Diplôme en ressources humaines, gestion ou un domaine connexe Expérience de 5 ans minimum dans un poste similaire Excellentes compétences en communication et en négociation Connaissance des réglementations du travail et des pratiques RH Capacité à diriger une équipe et à prendre des décisions stratégiques Handicaps les plus adaptés pour ce poste : Handicap auditif Handicap moteur léger Troubles de l\'apprentissage', 5, 5);

INSERT INTO operation (date, kind, id_account_fk, id_offer_fk) VALUES 
('2023-06-01', 'postuler', 1, 1),
('2023-06-01', 'postuler', 1, 2),
('2023-06-01', 'favori', 1, 3),
('2023-06-01', 'favori', 1, 4),
('2023-06-01', 'postuler', 1, 5);

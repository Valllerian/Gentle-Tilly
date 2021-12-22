const Sequelize = require('sequelize');
require('dotenv').config();

<<<<<<< HEAD
let sequelize;

if (process.env.JAWSDB_URL) { 
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else { //else run it locally
=======

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
>>>>>>> main
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

<<<<<<< HEAD
// working on heroku
module.exports = sequelize;
=======
//....
module.exports = sequelize;
>>>>>>> main

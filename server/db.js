const dbCredentials = require('../localdbCredentials.js');

//  Database
const Sequelize = require('sequelize');

const db = {
  name: 'carts',
  username: dbCredentials.username,
  password: dbCredentials.password
};

const sequelize = new Sequelize(db.name, db.username, db.password, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports.Cart = sequelize.define('cart', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

db.sync();

module.exports.db = db;

// functions to insert



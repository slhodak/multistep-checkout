//  Database
const mysql = require('mysql');
const Sequelize = require('sequelize');

const credentials = {
  db: '',
  username: '',
  password: ''
};

const sequelize = new Sequelize(credentials.db, credentials.username, credentials.password, {
  host: 'localhost',
  dialect: 'mysql'
});

class Cart extends Sequelize.Model {};
Cart.init({
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});



// functions to insert


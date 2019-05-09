const { username, password} = require('../localdbCredentials.js');

//  Database
const Sequelize = require('sequelize');

const sequelize = new Sequelize('carts', username, password, {
  host: 'localhost',
  dialect: 'mysql'
});



class Cart extends Sequelize.Model {};
Cart.init({
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  addressOne: Sequelize.STRING,
  addressTwo: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipCode: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  ccNumber: Sequelize.STRING,
  expirationDate: Sequelize.STRING,
  cvvCode: Sequelize.STRING,
  billingZipCode: Sequelize.STRING
}, {
  sequelize,
  modelName: 'cart'
});

sequelize.sync();

module.exports.Cart = Cart;
module.exports.db = sequelize;

// functions to insert



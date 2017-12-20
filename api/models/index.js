'use strict';

const Sequelize = require('sequelize');
const config = require('../../config');
const Attribute = require('./attribute');
const AttributeItem = require('./attributeItem');
const Product = require('./product');

const db = new Sequelize(config.db.NAME, config.db.USER, config.db.PASSWORD, {
  host: 'db', 
  dialect: 'mysql',
  operatorsAliases: false
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models = {
  Users: new Attribute(db, Sequelize),
  Items: new AttributeItem(db, Sequelize),
  Skus: new Product(db, Sequelize)
}

Object.keys(models).forEach(modelName => models[modelName].associate(models));


module.exports = models
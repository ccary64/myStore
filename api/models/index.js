'use strict';

const Sequelize = require('sequelize');
const config = require('../../config');
const Attribute = require('./attribute');
const AttributeItem = require('./attributeItem');
const Product = require('./product');
const ProductAttribute = require('./productAttribute');

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
  Attribute: new Attribute(db, Sequelize),
  AttributeItem: new AttributeItem(db, Sequelize),
  Product: new Product(db, Sequelize),
  ProductAttribute: new ProductAttribute(db, Sequelize),
}

Object.keys(models).forEach(modelName => models[modelName].associate(models));


module.exports = {
  Attribute: models.Attribute.model,
  AttributeItem: models.AttributeItem.model,
  Product: models.Product.model
}
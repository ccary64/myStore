'use strict';

const BaseModel = require('./baseModel');

class Product extends BaseModel {
  constructor(db, Sequelize) {
    super(db);
    this.modelName = 'Product';
    this.properties= {
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      attributeItemId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    };
    this.createModel();
  }
};

module.exports = Product;
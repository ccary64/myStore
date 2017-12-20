'use strict';

const BaseModel = require('./baseModel');

class Product extends BaseModel {
  constructor(db, Sequelize) {
    super(db);
    this.modelName = 'Product';
    this.properties= {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
      },
    };
    this.createModel();
  }
};

module.exports = Product;
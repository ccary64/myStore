'use strict';

const BaseModel = require('./baseModel');

class Attribute extends BaseModel {
  constructor(db, Sequelize) {
    super(db);
    this.modelName = 'Attribute';
    this.properties= {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    };
    this.createModel();
  }
};

module.exports = Attribute;
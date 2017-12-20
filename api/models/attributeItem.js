'use strict';

const BaseModel = require('./baseModel');

class AttributeItem extends BaseModel {
  constructor(db, Sequelize) {
    super(db);
    this.modelName = 'AttributeItem';
    this.properties= {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attributeId: {
        unique: 'AttributeItemIndex',
        allowNull: false,
        type: Sequelize.INTEGER
      },
      label: {
        unique: 'AttributeItemIndex',
        allowNull: false,
        type: Sequelize.STRING,
      },
    };
    this.createModel();
  }
};

module.exports = AttributeItem;
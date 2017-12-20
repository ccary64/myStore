'use strict';

module.exports = class BaseModel {
  constructor(db) {
    this.db = db;
  }
  createModel() {
    this.model = this.db.define(this.modelName, this.properties);
  }

  associate() {
    //Empty place holder;
  }
}
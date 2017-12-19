'use strict';

const frontEndRoutes = [
  '/',
  '/items',
  '/items/:itemId',
  '/cart'
]

module.exports = class FrontEnd {
  constructor(app, express) {
    this.app = app;
    this.express = express;
    this.staticRoutes();
  }

  staticRoutes() {
    frontEndRoutes.forEach(route => this.app.use(route , this.express.static(`${__dirname}/dist`)));
  }
} 
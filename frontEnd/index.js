'use strict';

const config = require('../config');
const { 
  BASE_ROUTE,
  ITEM_ROUTE_PREFIX,
  CART_ROUTE_PREFIX,
  ADMIN_ROUTE_PREFIX,
  CATEGORIES_ROUTE_PREFIX
} = config.routes;

const frontEndRoutes = [
  BASE_ROUTE,
  ITEM_ROUTE_PREFIX,
  CART_ROUTE_PREFIX,
  `${ITEM_ROUTE_PREFIX}/:itemId`,
  ADMIN_ROUTE_PREFIX,
  CATEGORIES_ROUTE_PREFIX
]

module.exports = class FrontEnd {
  constructor(app, express) {
    this.app = app;
    this.express = express;
    this.staticRoutes();
  }

  staticRoutes() {
    frontEndRoutes.forEach(route => this.app.get(route, (req, res) => res.sendFile(`${__dirname}/index.html`)));
    this.app.use('/public', this.express.static(`${__dirname}/dist`));
    this.app.get('*', (req, res) => res.sendFile(`${__dirname}/404.html`));
  }
} 
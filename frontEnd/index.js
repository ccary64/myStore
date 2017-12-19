'use strict';

const config = require('../config');
const { 
  BASE_ROUTE,
  ITEM_ROUTE_PREFIX,
  CART_ROUTE_PREFIX
} = config.routes;

const frontEndRoutes = [
  BASE_ROUTE,
  ITEM_ROUTE_PREFIX,
  `${ITEM_ROUTE_PREFIX}/*`,
  CART_ROUTE_PREFIX
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
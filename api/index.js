'use strict';

const config = require('../config');
const controllers = require('./controllers');
const { 
  API_ROUTE_PREFIX,
  ITEM_ROUTE_PREFIX,
  CART_ROUTE_PREFIX
} = config.routes;

module.exports = class Api {
  constructor(app, express) {
    this.app = app;
    this.express = express;
    this.setupRouter();
  }

  setupRouter() {
    const apiRouter = this.express.Router();
    apiRouter.use(ITEM_ROUTE_PREFIX, this.itemsRoutes());
    apiRouter.use(CART_ROUTE_PREFIX, this.cartRoutes());
    this.app.use(API_ROUTE_PREFIX, apiRouter);
  }

  itemsRoutes() {
    const itemRouter = this.express.Router();
    itemRouter.get('/', controllers.items.getAll);
    itemRouter.get(`/:itemId`, controllers.items.getById);
    return itemRouter;
  }

  cartRoutes() {
    const cartRouter = this.express.Router();
    cartRouter.post('/', controllers.cart.orderItems);
    return cartRouter;
  }
} 
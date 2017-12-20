'use strict';

const config = require('../config');
const controllers = require('./controllers');
const bodyParser = require('body-parser');

const { 
  API_ROUTE_PREFIX,
  ITEM_ROUTE_PREFIX,
  CART_ROUTE_PREFIX,
  ATTRIBUTE_ROUTE_PREFIX,
  PRODUCT_ROUTE_PREFIX
} = config.routes;

module.exports = class Api {
  constructor(app, express) {
    this.app = app;
    this.express = express;
    this.app.use(bodyParser.json());
    this.setupRouter();
  }

  setupRouter() {
    const apiRouter = this.express.Router();
    apiRouter.use(ITEM_ROUTE_PREFIX, this.itemsRoutes());
    apiRouter.use(CART_ROUTE_PREFIX, this.cartRoutes());
    apiRouter.use(ATTRIBUTE_ROUTE_PREFIX, this.attributeRoutes());
    apiRouter.use(PRODUCT_ROUTE_PREFIX, this.productRoutes());
    this.app.use(API_ROUTE_PREFIX, apiRouter);
  }

  itemsRoutes() {
    const itemRouter = this.express.Router();
    itemRouter.get('/', controllers.items.getAll);
    itemRouter.get(`/:itemId`, controllers.items.getById);
    return itemRouter;
  }

  attributeRoutes() {
    const attributeRouter = this.express.Router();
    attributeRouter.post('/', controllers.attributes.addAttribute);
    attributeRouter.get('/', controllers.attributes.getAllAttributes);
    attributeRouter.post('/:attributeId', controllers.attributeItems.addItem);
    attributeRouter.get('/:attributeId', controllers.attributeItems.getAllItems);
    return attributeRouter;
  }

  productRoutes() {
    const productRouter = this.express.Router();
    productRouter.post('/', controllers.products.addProduct);
    productRouter.put('/:productId', controllers.products.updateProduct);
    productRouter.get('/', controllers.products.getAllProducts);
    return productRouter;
  }

  cartRoutes() {
    const cartRouter = this.express.Router();
    cartRouter.post('/', controllers.cart.orderItems);
    return cartRouter;
  }
} 
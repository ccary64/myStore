

module.exports = {
  routes: {
    BASE_ROUTE: '/',
    API_ROUTE_PREFIX: '/api',
    ITEM_ROUTE_PREFIX: '/items',
    CART_ROUTE_PREFIX: '/cart',
    ATTRIBUTE_ROUTE_PREFIX: '/attributes',
    PRODUCT_ROUTE_PREFIX: '/products'
  },
  db: {
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME
  }
}
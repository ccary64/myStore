const config = require('../../config');

module.exports = {
  development: {
    "username": config.db.USER,
    "password": config.db.PASSWORD,
    "database": config.db.NAME,
    "host": "db",
    "dialect": "mysql"
  },
  test: {
    "username": config.db.USER,
    "password": config.db.PASSWORD,
    "database": config.db.NAME,
    "host": "db",
    "dialect": "mysql"
  },
  production: {
    "username": config.db.USER,
    "password": config.db.PASSWORD,
    "database": config.db.NAME,
    "host": "db",
    "dialect": "mysql"
  }
}
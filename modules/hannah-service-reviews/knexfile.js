const path = require('path');
const config = require('./config.js');

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/reviews',
    migrations: {
      directory: path.join(__dirname, 'db/postgreSQL/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db/postgreSQL/seeds'),
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      host: config.host,
      user: config.user,
      password: config.pw,
      database: 'reviews',
      port: 5432
    },
    migrations: {
      directory: path.join(__dirname, 'db/postgreSQL/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'db/postgreSQL/seeds'),
    },
  }
};








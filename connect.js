/* jshint esversion: 6*/
const pgp = require('pg-promise')();
const db = pgp('postgres://proart_user:password@localhost:5432/articles_products');

module.exports = db;
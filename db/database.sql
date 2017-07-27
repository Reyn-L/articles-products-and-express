\c reyn

DROP DATABASE IF EXISTS products_db;
DROP USER IF EXISTS products_user;

CREATE USER products_user;
CREATE DATABASE products_db WITH OWNER products_user;

\c products_db;

CREATE TABLE products (
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR(100),
price MONEY,
inventory INT
);
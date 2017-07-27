\c reyn

DROP DATABASE IF EXISTS articles_products;
DROP USER IF EXISTS proart_user;

CREATE USER proart_user WITH LOGIN PASSWORD 'password';
CREATE DATABASE articles_products WITH OWNER proart_user;

\c articles_products;

CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(100) UNIQUE,
  price MONEY,
  inventory INT
);

CREATE TABLE authors (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE articles (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(100) UNIQUE,
  body VARCHAR(255),
  url TEXT,
  author_id INT REFERENCES authors(id)
);

ALTER TABLE products OWNER TO proart_user;
ALTER TABLE authors OWNER TO proart_user;
ALTER TABLE articles OWNER TO proart_user;
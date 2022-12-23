drop database if exists products;

CREATE DATABASE products;

USE products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name Text,
  slogan Text,
  description Text,
  category Text,
  default_price INTEGER
);

COPY products
FROM '../data/product.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  feature TEXT,
  value TEXT
);

COPY features
FROM '../data/features.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES products(id),
  name TEXT,
  sale_price INTEGER,
  original_price INTEGER,
  default_style BOOLEAN
);

COPY styles
FROM '../data/styles.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles(id),
  url TEXT,
  thumbnail_url TEXT
);

COPY photos
FROM '../data/photos.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles(id),
  size TEXT,
  quantity INTEGER
);

COPY skus
FROM '../data/skus.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER REFERENCES products(id),
  related_product_id INTEGER
);

COPY related
FROM '../data/related.csv'
DELIMITER ','
CSV HEADER;
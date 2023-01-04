drop database if exists products;

CREATE DATABASE products;

USE products;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name Text,
  slogan Text,
  description Text,
  category Text,
  default_price INTEGER
);

COPY products
FROM '/Users/max/HackReactor/SEI/week8/products-api/data/product.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE IF NOT EXISTS features (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  feature TEXT,
  value TEXT
);

COPY features
FROM '/Users/max/HackReactor/SEI/week8/products-api/data/features.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE IF NOT EXISTS styles (
  id SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES products(id),
  name TEXT,
  sale_price TEXT,
  original_price TEXT,
  default_style BOOLEAN
);

COPY styles
FROM '/Users/max/HackReactor/SEI/week8/products-api/data/styles.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles(id),
  url TEXT,
  thumbnail_url TEXT
);

COPY photos
FROM '/Users/max/HackReactor/SEI/week8/products-api/data/photos.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE IF NOT EXISTS skus (
  id SERIAL PRIMARY KEY,
  styleId INTEGER REFERENCES styles(id),
  size TEXT,
  quantity INTEGER
);

COPY skus
FROM '/Users/max/HackReactor/SEI/week8/products-api/data/skus.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE IF NOT EXISTS related (
  id SERIAL PRIMARY KEY,
  current_product_id INTEGER REFERENCES products(id),
  related_product_id INTEGER
);

COPY related
FROM '/Users/max/HackReactor/SEI/week8/products-api/data/related.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX product_index ON products(id);
CREATE INDEX feature_index ON features(product_id);
CREATE INDEX style_index ON styles(productId);
CREATE INDEX photo_index ON photos(styleId);
CREATE INDEX sku_index ON skus(styleId);
CREATE INDEX related_index ON related(current_product_id);
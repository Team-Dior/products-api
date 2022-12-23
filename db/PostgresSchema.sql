drop database if exists products;

CREATE DATABASE products;

USE products;

CREATE TABLE products (
  product_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(1000)
  s
);

CREATE TABLE messages (
  message_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(1000),
  -- room_id INTEGER(11),
  room_name VARCHAR(1000),
  user_id INTEGER(11)
  -- FOREIGN KEY (room_id) REFERENCES rooms(room_id),
  -- FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- CREATE TABLE friends (
--   user_id INTEGER NOT NULL,
--   friend_id INTEGER NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES users(user_id),
--   FOREIGN KEY (friend_id) REFERENCES users(user_id)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


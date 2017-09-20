DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

DROP TABLE IF EXISTS grocery_items;
CREATE TABLE grocery_items(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL,
  section VARCHAR(255)
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  order_date DATE,
  shopper_id INTEGER REFERENCES shoppers
);

DROP TABLE IF EXISTS ordered_items;
CREATE TABLE ordered_items(
  order_id INTEGER REFERENCES orders,
  grocery_id INTEGER REFERENCES grocery_items
);
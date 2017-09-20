COPY grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers(name) VALUES ('Beyonce Knowles');
INSERT INTO shoppers(name) VALUES ('Rihanna Fenty');
INSERT INTO shoppers(name) VALUES ('Michael Jackson');
INSERT INTO shoppers(name) VALUES ('Janet Jackson');
INSERT INTO shoppers(name) VALUES ('Kanye West');

INSERT INTO orders(order_date, shopper_id) VALUES ('2017-01-01', 3);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-02-01', 3);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-03-01', 4);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-04-01', 2);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-05-01', 1);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-06-01', 3);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-07-01', 5);

INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 7);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 10);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 3);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 1);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (2, 33);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (2, 41);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (3, 35);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (3, 31);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 23);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 2);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 9);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 17);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (5, 11);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (5, 12);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (5, 14);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (6, 13);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (7, 15);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (7, 20);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (7, 25);
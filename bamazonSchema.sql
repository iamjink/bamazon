DROP DATABASE IF EXISTS sql3327345;
CREATE DATABASE sql3327345;

USE sql3327345;

CREATE TABLE sql3327345.products
(
  item_id INT NOT NULL,
  product_name VARCHAR
  (100) NOT NULL,
  department_name VARCHAR
  (45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY
  (item_id)
);

  Select *
  FROM sql3327345.products;

  INSERT INTO sql3327345.products
    (item_id, product_name, department_name, price, stock_quantity)
  VALUES
    (156, "detergents", "toiletories", 12, 315),
    (16, "toothpaste", "toiletories", 10, 543),
    (365, "garlic oil", "kitchen items", 7, 56),
    (984, "body soap", "toiletories", 9, 65),
    (32, "vacuum cleaner", "toiletories", 320, 72),
    (654, "honey", "kitchen items", 13, 251),
    (154, "rice", "kitchen items", 24, 16),
    (265, "swifter swift", "toiletories", 34, 165),
    (33, "bleach", "toiletories", 21, 93),
    (46, "chocolate chip cookies", "kitchen items", 10, 142)
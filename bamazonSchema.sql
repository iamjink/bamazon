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
    (156, "detergents", "StayClean", 12, 315),
    (16, "detergents", "StayClean", 12, 315),
    (365, "detergents", "StayClean", 12, 315),
    (984, "detergents", "StayClean", 12, 315),
    (32, "detergents", "StayClean", 12, 315),
    (654, "detergents", "StayClean", 12, 315),
    (154, "detergents", "StayClean", 12, 315),
    (265, "detergents", "StayClean", 12, 315),
    (33, "detergents", "StayClean", 12, 315),
    (46, "detergents", "StayClean", 12, 315)
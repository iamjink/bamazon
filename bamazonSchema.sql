DROP DATABASE IF EXISTS sql3327345;
CREATE DATABASE sql3327345;

USE sql3327345;

CREATE TABLE sql3327345.auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);
CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(100) DEFAULT NULL,
  description varchar(2000) DEFAULT NULL,
  price int DEFAULT NULL,
  duration int DEFAULT NULL,
  productType varchar(100) DEFAULT NULL,
  user_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
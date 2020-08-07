DROP DATABASE IF EXISTS auth_db;
CREATE DATABASE auth_db;
USE auth_db;

/* Create a table for all your member passwords */
CREATE TABLE member (
	id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(70) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) 
);

 INSERT INTO member (email, password) VALUES ('test@gmail.com', 'Test!1234');

SELECT * FROM member
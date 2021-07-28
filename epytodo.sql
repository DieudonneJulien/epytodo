DROP DATABASE IF EXISTS epytodo;
CREATE DATABASE IF NOT EXISTS epytodo;

USE epytodo;

CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE todo (
       id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
       title VARCHAR(255) NOT NULL,
       description VARCHAR(255) NOT NULL,
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       due_time DATETIME NOT NULL,
       status ENUM("to do", "in progress", "done", "not started") DEFAULT "not started",
       user_id INT UNSIGNED,
       FOREIGN KEY (user_id) REFERENCES user(id)
);

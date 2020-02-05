CREATE DATABASE moviesList-db;

USE moviesList-db;

-- TABLE USERS
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

INSERT INTO users(id, username, password, fullname) VALUES(1, 'nikita', 'password', 'nikita fomyshyn');

SELECT * FROM users;

-- TABLE MOVIES

CREATE TABLE movies(
    id INT(11) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    url_cover VARCHAR(500),
    public_id VARCHAR(50),
    user_id INT(11) ,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

ALTER TABLE movies
    ADD PRIMARY KEY (id);

ALTER TABLE movies
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE MOVIES;
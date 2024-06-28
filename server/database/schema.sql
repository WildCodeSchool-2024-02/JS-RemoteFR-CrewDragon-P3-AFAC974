CREATE TABLE role (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

INSERT INTO role (name) VALUES ("user"), ("artist"), ("admin");

CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    avatar VARCHAR(150),
    role_id INT UNSIGNED,
    FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE category (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE artwork (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    size_artwork VARCHAR(50) NOT NULL,
    years INT NOT NULL,
    image_url VARCHAR(200) NOT NULL,
    description TEXT,
    category_id INT UNSIGNED,
    user_id INT UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);


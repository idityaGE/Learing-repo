CREATE TABLE user (
    -- id INT AUTO_INCREMENT PRIMARY KEY,
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    -- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

SELECT * FROM user;
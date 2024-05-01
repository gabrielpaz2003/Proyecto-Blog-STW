-- Create a database and a user for the blog application
CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_db.* TO 'blog_user'@'%';
FLUSH PRIVILEGES;

-- Create a table for the blog posts
CREATE TABLE IF NOT EXISTS Posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_64 VARCHAR(255)
);

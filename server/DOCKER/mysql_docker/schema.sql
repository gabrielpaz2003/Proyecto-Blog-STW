-- Crear la base de datos (esto usualmente se hace fuera del script SQL en PostgreSQL, por ejemplo, usando psql o una interfaz gráfica)
-- CREATE DATABASE blog_db;

-- Conectar a la base de datos (esto se hace desde tu herramienta de administración de base de datos o desde tu aplicación)
-- \c blog_db

-- Crear un usuario y asignarle privilegios
--CREATE USER blog_user WITH ENCRYPTED PASSWORD 'blog_password';
--GRANT ALL PRIVILEGES ON DATABASE blog_db TO blog_user;

-- Crear la tabla para los posts del blog
CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_64 VARCHAR(255)
);


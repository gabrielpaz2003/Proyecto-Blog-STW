const { Pool } = require('pg');

const pool = new Pool({
  host: 'dpg-cot5v2l1jm4es73b8ndig-a', // Usar el hostname correcto para PostgreSQL
  user: 'blog_user',
  password: 'ZMZ211F7r6T6DoemgES5XBHqb90XUM0p',
  database: 'blog_db_vw3r', // Nombre de base de datos según tus credenciales
  port: 5432, // Puerto por defecto de PostgreSQL
  idleTimeoutMillis: 30000, // Tiempo en milisegundos que un cliente debe estar inactivo antes de ser cerrado
  connectionTimeoutMillis: 2000, // Tiempo en milisegundos para conectarse a la base de datos antes de generar error
});

module.exports.pool = pool;


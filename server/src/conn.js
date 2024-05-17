const { Pool } = require('pg');

const pool = new Pool({
  host: 'dpg-cot5v2ljm4es73b8ndig-a',
  user: 'blog_user',
  password: 'ZMZ21iF7r6I6DoemgE5SXBHqb9OXUM0p',
  database: 'blog_db_vw3r',
  port: 5432,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports.pool = pool;


'use strict'
const connection = require('./conn.js') // Importar la conexión de la base de datos
const conn = connection.pool

// Función para leer todos los Posts
async function leerPosts() {
  const { rows } = await conn.query('SELECT * FROM Posts')
  return rows
}

// Función para leer un Post específico
async function leerPostEspecifico(id) {
  const { rows } = await conn.query('SELECT * FROM Posts WHERE id = $1', [id])
  return rows[0] // Devuelve el primer elemento o undefined si no hay resultados
}

// Función para crear un post
async function crearPost(title, content) {
  const { rows } = await conn.query(
    'INSERT INTO Posts (title, content) VALUES ($1, $2) RETURNING *', // RETURNING * devuelve los valores insertados
    [title, content]
  )
  return rows[0]
}

// Función para crear un post con imagen
async function crearPostConImagen(title, content, image) {
  const { rows } = await conn.query(
    'INSERT INTO Posts (title, content, image) VALUES ($1, $2, $3) RETURNING *',
    [title, content, image]
  )
  return rows[0]
}

// Función para actualizar un post
async function actualizarPost(id, title, content) {
  const { rows } = await conn.query(
    'UPDATE Posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  )
  return rows[0]
}

// Función para actualizar un post con imagen
async function actualizarPostConImagen(id, title, content, image) {
  const { rows } = await conn.query(
    'UPDATE Posts SET title = $1, content = $2, image = $3 WHERE id = $4 RETURNING *',
    [title, content, image, id]
  )
  return rows[0]
}

// Función para eliminar un post
async function eliminarPost(id) {
  const { rows } = await conn.query(
    'DELETE FROM Posts WHERE id = $1 RETURNING *',
    [id]
  )
  return rows[0] // Devuelve el elemento eliminado o undefined si no se eliminó nada
}

// Exportar las funciones al server
module.exports = {
  leerPosts,
  leerPostEspecifico,
  crearPost,
  crearPostConImagen,
  actualizarPost,
  actualizarPostConImagen,
  eliminarPost
}

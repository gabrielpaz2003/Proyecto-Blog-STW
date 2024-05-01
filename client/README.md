# Front-End de Blog - Proyecto Blog

## Descripción
Este proyecto es el frontend para una aplicación de blog desarrollada como parte del Proyecto Blog STW. Proporciona una interfaz de usuario para realizar operaciones CRUD sobre posts de blog y se comunica con un backend basado en Node.js y Express. Este frontend está construido usando React y empaquetado con Vite.

## Requisitos
- Node.js
- npm

## Instalación
1. Navega al directorio del cliente:
**cd client**

2. Instala las dependencias del proyecto:
**npm install**

## Uso
1. Para iniciar el servidor de desarrollo, ejecuta:
**npm run dev**

El servidor estará corriendo en el puerto que asigne Vite.

2. Para construir la versión de producción, ejecuta:
**npm run build**

Los archivos estáticos se generarán en el directorio dist.

## Estructura del Proyecto
Aquí está un breve resumen de los directorios y archivos más importantes en el cliente:

**/client**
|-- /node_modules
|-- /public
|-- /src
|   |-- /assets
|   |-- /components
|   |-- /context
|   |-- /hooks
|   |-- /pages
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   |-- index.jsx
|   |-- main.jsx
|-- .eslintrc.js
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- vite.config.js

### Pages
- **Login:** Vista para el inicio de sesión.
- **Admin:** Pagina principal del proyecto.
- **Post:** Mostrara todos los posts de la base de datos.
- **AddPost:** Vista donde se encuentra el formulario para agregar un post.
- **EditPost:** Vista donde se encuentra el formulario para editar un post.

### Componentes
- **Card:** Utilizado para mostrar resúmenes de los posts.
- **NavBar:** Barra de navegación para la aplicación.
- **PostForm:** Formulario utilizado para crear y editar posts.

### Hooks
- **useApi:** Hook personalizado para interactuar con el backend API.

### Context
* **AuthContext:** Proporciona un contexto de autenticación para la aplicación.


## Desarrollado por
Gabriel Paz

## Licencia
Este proyecto está bajo la Licencia ISC

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

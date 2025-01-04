# Proyecto API de Motocicletas

## Descripción

Este proyecto consiste en una API RESTful que permite gestionar motocicletas y usuarios. Los usuarios pueden registrarse, iniciar sesión, y asignar motocicletas a su perfil. Además, se pueden gestionar categorías de motocicletas.

### Autor

- **Nombre**: Miguel Jimenez
- **Año**: 2024

## Tecnologías Utilizadas

- **Node.js**: Para el backend.
- **Express**: Framework para construir aplicaciones web.
- **MongoDB**: Base de datos NoSQL para almacenar datos.
- **JWT**: Para la autenticación de usuarios.
- **Bcrypt**: Para el hash de contraseñas.
- **dotenv**: Para manejar variables de entorno.

## Rutas de la API

### Rutas de Usuarios

1. **Registrar un Usuario**

   - **Método**: POST
   - **Ruta**: `/api/users/register`
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "email": "usuario@example.com",
       "password": "tuContraseña",
       "nombre": "Nombre del Usuario"
     }
     ```

2. **Iniciar Sesión**

   - **Método**: POST
   - **Ruta**: `/api/users/login`
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "email": "usuario@example.com",
       "password": "tuContraseña"
     }
     ```

3. **Eliminar un Usuario**

   - **Método**: DELETE
   - **Ruta**: `/api/users/:userId`
   - **Headers**: Incluye el token JWT en el encabezado `Authorization`.
   - **Ejemplo**: `/api/users/1234567890abcdef`

4. **Asignar una Motocicleta a un Usuario**

   - **Método**: POST
   - **Ruta**: `/api/users/:userId/motos`
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "motoId": "1234567890abcdef"
     }
     ```

5. **Obtener Todos los Usuarios**
   - **Método**: GET
   - **Ruta**: `/api/users`
   - **Headers**: Incluye el token JWT en el encabezado `Authorization`.

### Rutas de Motos

1. **Obtener Todas las Motos**

   - **Método**: GET
   - **Ruta**: `/api/motos`

2. **Obtener una Moto por ID**

   - **Método**: GET
   - **Ruta**: `/api/motos/:id`
   - **Ejemplo**: `/api/motos/1234567890abcdef`

3. **Crear una Nueva Moto**

   - **Método**: POST
   - **Ruta**: `/api/motos`
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "marca": "Marca de la Moto",
       "modelo": "Modelo de la Moto",
       "cilindrada": "150",
       "año": "2020",
       "color": "Rojo",
       "estado": "nueva",
       "categoria": "605c72ef3e7b6e001f64f2a1" // ID de categoría
     }
     ```

4. **Actualizar una Moto**

   - **Método**: PUT
   - **Ruta**: `/api/motos/:id`
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "marca": "Nueva Marca",
       "modelo": "Nuevo Modelo"
     }
     ```

5. **Eliminar una Moto**

   - **Método**: DELETE
   - **Ruta**: `/api/motos/:id`

6. **Obtener Motos por Categoría**
   - **Método**: GET
   - **Ruta**: `/api/motos/categoria/:categoriaId`
   - **Ejemplo**: `/api/motos/categoria/605c72ef3e7b6e001f64f2a1`

### Rutas de Categorías

1. **Obtener Todas las Categorías**

   - **Método**: GET
   - **Ruta**: `/api/categorias`

2. **Crear una Nueva Categoría**

   - **Método**: POST
   - **Ruta**: `/api/categorias`
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "nombre": "Categoría de Ejemplo"
     }
     ```

3. **Actualizar una Categoría**

   - **Método**: PUT
   - **Ruta**: `/api/categorias/:id`
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "nombre": "Nueva Categoría"
     }
     ```

4. **Eliminar una Categoría**
   - **Método**: DELETE
   - **Ruta**: `/api/categorias/:id`

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

### Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MongoDB](https://www.mongodb.com/) (asegúrate de que el servidor esté en ejecución)
- Un gestor de paquetes como [npm](https://www.npmjs.com/) (incluido con Node.js)

### Pasos para la Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/MiguelSJimenezV/BikesAPIProject.git
   ```

2. **Instala las Dependencias**:

   ```bash
   npm i
   ```

3. **Inicia el Servidor**:

   ```bash
   npm start
   ```

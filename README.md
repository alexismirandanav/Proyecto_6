
# Proyecto 6. 

Proyecto 6, BootCamp UDD C20.
Aplicación backend con autenticación

El proyecto se centra en la construcción de una aplicación backend CRUD (Crear, Leer, Actualizar, Eliminar).

## Tecnologías Utilizadas

- Node.js – Entorno de ejecución para JavaScript.
- Express – Framework para construir la API.
- MongoDB – Base de datos NoSQL para persistencia de datos.
- Mongoose – ODM para modelar y gestionar documentos en MongoDB.
- JWT – Manejo de autentificación basada en tokens.
- bcrypt – Para hashear contraseñas de forma segura.

## Endpoints para Usuario

| Descripción                        | Método | Endpoint                 |
| ---------------------------------- | ------ | ------------------------ |
| Crear un nuevo usuario             | POST   | /api/user/register       |
| Iniciar sesión de usuario          | POST   | /api/users/login         |
| Verificar token de usuario         | GET    | /api/user/verifytoken    |
| Actualizar información del usuario | PUT    | /api/users/update        |

## Endpoints para Producto

| Descripción                        | Método | Endpoint                 |
| ---------------------------------- | ------ | ------------------------ |
| Crear un producto                  | POST   | /api/product/create      |
| Leer todos los productos           | GET    | /api/product/readall     |
| Leer un producto específico        | GET    | /api/product/readone/:id |
| Actualizar un producto             | PUT    | /api/product/update/:id  |
| Eliminar un producto               | DELETE | /api/product/delete/:id  |


## Screenshots Endpoints para Usuario
Register
![App Screenshot](./src/img/user_register.jpg)

Login
![App Screenshot](./src/img/user_login.jpg)

Update
![App Screenshot](./src/img/user_update.jpg)

Verifytoken
![App Screenshot](./src/img/user_verifytoken.jpg)

## Screenshots Endpoints para Producto

Create
![App Screenshot](./src/img/product_create.jpg)

Readall 
![App Screenshot](./src/img/product_readall.jpg)

Readone/:id
![App Screenshot](./src/img/product_readone.jpg)

Update/:id
![App Screenshot](./src/img/product_update.jpg)

Delete/:id
![App Screenshot](./src/img/product_delete.jpg)

## Instalación y configuración

- Clona este repositorio: (https://github.com/alexismirandanav/Proyecto_6)

- Instala las dependencias

```
$ npm install
```

- Asegúrate de tener un archivo `.env` con las variables de entorno. En este caso, configuraré de esta forma:

```
MONGODB_URI=mongodb://localhost:27017/AMN_proyecto_6
PORT=3000
SECRET=UDDP6
```

- Levanta el proyecto:

```
$ npm run dev
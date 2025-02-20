// Importar dependencias
import express from 'express';
const route = express.Router();

// Importar el controlador
import usersController from '../controllers/users.js';
import { verificarToken } from '../helpers/autenticacion.js';

// Definir las rutas
route.post('/register', usersController.register);
route.post('/login', usersController.login);
route.get('/profile', verificarToken, usersController.profile);

// Exportar las rutas
export default route;
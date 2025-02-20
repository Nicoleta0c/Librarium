// Importar dependencias
import { verificarToken } from '../helpers/autenticacion.js';
import express from 'express';
const route = express.Router();

// Importar el controlador
import booksController from '../controllers/books.js';

// Definir las rutas
route.post('/', booksController.create);
route.get('/:id', booksController.getOne);
route.get('/', booksController.getAll); 
route.put('/:id', verificarToken, booksController.update);
route.delete('/:id', verificarToken, booksController.delete);

// Exportar las rutas
export default route;

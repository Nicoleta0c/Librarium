
import booksModel from '../models/books.js'

class booksController {
    constructor() {}

    // Método para crear
    async create(req, res) {
        try {
            const data = await booksModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para actualizar
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await booksModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para eliminar
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await booksModel.delete(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener todos los libros
    async getAll(req, res) {
        try {
            const data = await booksModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    // Método para obtener un libro por ID
    async getOne(req, res) {
        try {
            const { id } = req.params; 
            const data = await booksModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

// Exportar la instancia de la clase
export default new booksController();

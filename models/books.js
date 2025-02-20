import { ObjectId } from "mongodb";
import Books from "../schemas/books.js"
import mongoose from "mongoose";

class booksModel {

    async create(book) {
        return await Books.create(book);    
    }

    async update(id, book) {
        return await Books.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, book, {new: true});
    }

    async delete(id) {
        return await Books.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }

    async getAll() {
        return await Books.find();
    }

    async getOne(id) {
        return await Books.findById({id});
    }


}

export default new booksModel;
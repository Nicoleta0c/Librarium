const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    book_id: { 
        type: Number, 
        required: true, 
        unique: true 
    }, 
    title: { 
        type: String, 
        required: true 
    },              
    author: { 
        type: String,
        required: true 
    },                             
    genre: { 
        type: String, 
        required: true 
    },
    publication_year: { 
        type: Number, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    isbn: {
        type: String,   
        required: true,
        unique: true
    },
    disponibility: {
        type: Number,
        required: true
    },
    calification: {
        type: Number
    },
});

module.exports = mongoose.model('Book', bookSchema);
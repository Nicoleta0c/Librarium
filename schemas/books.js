    import mongoose from "mongoose";

    const bookSchema = new mongoose.Schema({

        name: {
            type: String,
            required: true,
        },
        autor: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },		
        publication_year: {
            type: Number,
            required: true,
        },
        isbn: {
            type: String,
            required: true,		
        },
        disponibility: {
            type: Boolean,
            required: true,
        },
        calcification: {
            type: Number,
        },		
    }, {timestamps: true}
);	
    
   export default mongoose.model('Books', bookSchema);
    
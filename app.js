require('dotenv').config();
const connectDB = require('./config/db');

const startServer = async () => {
    await connectDB(); // Intenta conectar a la base de datos
    console.log('Servidor listo');
};


startServer();
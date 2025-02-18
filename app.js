// app.js
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');  // Rutas de autenticación

const app = express();

// Middlewares
app.use(express.json());  // Para parsear JSON
app.use(cookieParser());  // Para manejar cookies

// Conexión a la base de datos
const startServer = async () => {
  try {
    await connectDB();  // Intentamos conectar a la base de datos
    console.log('Base de datos conectada');
  } catch (error) {
    console.log('Error en la conexión a la base de datos:', error);
    return;
  }

  // Usar las rutas de autenticación
  app.use('/auth', authRoutes);  // Aquí tus rutas de autenticación

  // Ruta base
  app.get('/', (req, res) => {
    res.send('Bienvenido al Sistema de Gestión de Bibliotecas');
  });

  // Iniciar el servidor
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
};
startServer();

// Importar dependencias
import 'dotenv/config';
import express from 'express';
import dbClient from './config/dbClient.js';

// Importar las rutas
import routeUsers from './routes/users.js'
import routeBooks from './routes/books.js';
import bodyParser from 'body-parser';

// Crear instancia de express
const app = express();

// Middlewares para interpretar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Usar las rutas
app.use('/books', routeBooks);
app.use('/users', routeUsers);

console.log("Rutas cargadas:");
console.log(app._router.stack.map(r => r.route?.path).filter(Boolean));

//try catch para conexion
try {
    const PORT = process.env.PORT || 3000; 
    app.listen(PORT, ()=> console.log('Servidor activo en el puerto: ' + PORT)  );
} catch(e) {
    console.log(e);
}

process.on('SIGINT', async() => {
    dbClient.closeConexion();
    process.exit(0);
});
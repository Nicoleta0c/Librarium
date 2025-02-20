import { generarToken } from '../helpers/autenticacion.js';
import userModel from '../models/users.js';
import bcrypt from "bcrypt";


class usersController {
    constructor() {

    }

    async register (req, res) {
   try {
            const {name, email, password} = req.body;

            const usuarioExiste = await userModel.getOne({ email });

            if (usuarioExiste) {
                return res.status(400).json({ error: 'El usuario existe' });
            }

           const claveEncriptada = await bcrypt.hash(password, 10);



            const data = await userModel.create( {
                name, 
                email, 
                password: claveEncriptada
            });
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            // Convertir el email a minúsculas
            const usuarioExiste = await userModel.getOne({ email });
    
            if (!usuarioExiste) {
                return res.status(400).json({ error: 'El usuario no existe' });
            }
    
            const claveValida = await bcrypt.compare(password, usuarioExiste.password);
    
            if (!claveValida) {
                return res.status(400).json({ error: 'Contraseña no válida' });
            }
    
            const token = generarToken(email);

            return res.status(200).json({ msg:'Usuario autenticado', token });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }
    

    async profile(req, res) {
        try {
            if (!req.emailConectado) {
                return res.status(400).json({ error: "Email no encontrado en la solicitud" });
            }
            
            const data = await userModel.getOne({ email: req.emailConectado });
    
            if (!data) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }
    
            return res.status(200).json(data);
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }
    
    

};



export default new usersController()
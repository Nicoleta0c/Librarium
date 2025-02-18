const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const router = express.Router();

// Ruta para registro
router.post('/register', registerUser);

// Ruta para login
router.post('/login', loginUser);

// Ruta para logout
router.get('/logout', logoutUser);

module.exports = router;

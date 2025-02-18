const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Schema de Usuario
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

// Encriptar la contraseña antes de guardar el usuario
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Si no se modifica la contraseña, no hacer nada

  try {
    // Encriptamos la contraseña
    const salt = await bcrypt.genSalt(10);  // Generamos el "sal" para el hash
    this.password = await bcrypt.hash(this.password, salt);  // Encriptamos la contraseña
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar la contraseña en el login
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);  // Compara la contraseña ingresada con la encriptada
};

module.exports = mongoose.model('User', userSchema);

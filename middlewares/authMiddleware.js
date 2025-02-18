const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Acceso denegado, inicia sesión" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Usar SECRET_KEY desde .env
    req.user = decoded; // Guardamos la info del usuario en `req.user`
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

module.exports = authMiddleware;

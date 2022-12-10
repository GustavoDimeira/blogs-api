require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const verifyToken = (authorization) => {
  try {
    const result = jwt.verify(authorization, secret);
    return { message: result };
  } catch (err) {
    return { err, message: 'Expired or invalid token' };
  }
};

const tokenValidation = (req, res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const { err, message } = verifyToken(authorization);
  if (err) return res.status(401).json({ message });
  next();
};

module.exports = { tokenValidation };
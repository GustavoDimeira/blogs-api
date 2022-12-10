const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'YourSecretHere';

const jwtConfig = { algorithm: 'HS256', expiresIn: '8h' };

const login = async (email, password) => {
  const validUser = await User.findOne({ where: { email, password } });

  if (validUser !== null) {
    const token = jwt.sign({ data: validUser.dataValues }, secret, jwtConfig);
    return { type: 200, token };
  }
  return { type: 400, message: 'Invalid fields' };
};

module.exports = { login };

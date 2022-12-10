const jwt = require('jsonwebtoken');

const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'YourSecretHere';

const jwtConfig = { algorithm: 'HS256', expiresIn: '8h' };

const createUser = async (displayName, email, password, image = null) => {
  const existingEmail = await User.findOne({ where: { email } });
  if (existingEmail === null) {
    const newUser = User.create({ displayName, email, password, image });

    const token = jwt.sign({ data: newUser.dataValues }, secret, jwtConfig);

    return { type: 201, token };
  }
  return { type: 409, message: 'User already registered' };
};

module.exports = { createUser };

const { login } = require('../services/login.service');

const userPost = async (req, res) => {
  const { displayName, email, password } = req.body;
  const { type, message, token } = await login(displayName, email, password);

  if (token) {
    return res.status(type).json({ token });
  } 
  return res.status(type).json({ message });
};

module.exports = {
  userPost,
};
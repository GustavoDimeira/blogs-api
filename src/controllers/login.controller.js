const { login } = require('../services/login.service');

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  const { type, message, token } = await login(email, password);

  if (token) {
    return res.status(type).json({ token });
  } 
  return res.status(type).json({ message });
};

module.exports = {
  loginPost,
};
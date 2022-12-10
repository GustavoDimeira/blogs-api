const { createUser } = require('../services/user.service');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message, token } = await createUser(displayName, email, password, image);

  if (token) {
    return res.status(type).json({ token });
  } 
  return res.status(type).json({ message });
};

module.exports = {
  userPost,
};
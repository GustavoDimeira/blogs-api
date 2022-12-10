const { createUser, usersList } = require('../services/user.service');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message, token } = await createUser(displayName, email, password, image);

  if (token) {
    return res.status(type).json({ token });
  } 
  return res.status(type).json({ message });
};

const getAllUsers = async (_req, res) => {
  const allUsers = await usersList();
  if (allUsers !== null) {
    const response = allUsers.map((user) => {
      const { id, displayName, email, image } = user;
      return { id, displayName, email, image };
    }, []);
    return res.status(200).json(response);
  }
  return res.status(500).json({ mensage: 'internal server error' });
};

module.exports = {
  userPost,
  getAllUsers,
};
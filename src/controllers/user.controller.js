const {
  createUser, usersList, getUserById,
} = require('../services/user.service');

const removePassword = (array) => {
  const result = array.map((user) => {
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  }, []);
  return result;
};

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
    const response = removePassword(allUsers);
    return res.status(200).json(response);
  }
  return res.status(500).json({ mensage: 'internal server error' });
};

const getUser = async (req, res) => {
  const { params: { id } } = req;
  const { type, user } = await getUserById(id);

  if (type) {
    return res.status(type).json({ message: 'User does not exist' });
  }
  const response = removePassword(user);
  return res.status(200).json(response[0]);
};

module.exports = {
  userPost,
  getAllUsers,
  getUser,
};
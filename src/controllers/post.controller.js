const { getAllPosts } = require('../services/post.service');

const getPosts = async (req, res) => {
  const { params: { id } } = req;
  const { type, message } = await getAllPosts(id);

  res.status(type).json(message);
};

module.exports = { getPosts };
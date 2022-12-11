const { getAllPosts } = require('../services/post.service');

const getPosts = async (req, res) => {
  const { type, mesage } = await getAllPosts();

  res.status(type).json(mesage);
};

module.exports = { getPosts };
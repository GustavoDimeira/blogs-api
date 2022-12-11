const { addNewCategory, getAllCategories } = require('../services/category.service');

const categoryPost = async (req, res) => {
  const { body: { name } } = req;
  const { type, mesage } = await addNewCategory(name);

  if (type) {
    res.status(type).json(mesage);
  } else {
    return res.status(500).json({ mesage: 'internal server error' });
  }
};

const getCategories = async (req, res) => {
  const categories = await getAllCategories();

  return res.status(200).json(categories);
};

module.exports = { categoryPost, getCategories };

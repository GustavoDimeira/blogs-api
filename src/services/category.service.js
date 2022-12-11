const { Category } = require('../models');

const addNewCategory = async (name) => {
  const { dataValues: { id } } = await Category.create({ name });
  // const category = await Category.findOne({ name });
  return ({ type: 201, mesage: { id, name } });
};

const getAllCategories = async () => {
  const response = await Category.findAll();

  return (response);
};

module.exports = { addNewCategory, getAllCategories };
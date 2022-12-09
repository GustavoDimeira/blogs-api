module.exports = CategorySchema = (sequelize, dataTypes) => {
  const Category = sequelize.define('Category', {
    name: dataTypes.STRING
  });

  return Category;
}

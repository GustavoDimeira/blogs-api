module.exports = CategorySchema = (sequelize, dataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    name: dataTypes.STRING
  });

  return Category;
}

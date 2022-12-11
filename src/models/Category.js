module.exports = CategorySchema = (sequelize, dataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: dataTypes.STRING
  },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    });

  return Category;
}

const PostCategoriesSchema = (sequelize, dataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      title: 'post_id',
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      title: 'category_id',
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
  },
    {
      primaryKey: true,
      timestamps: false,
      underscored: true,
      tableName: 'post_categories'
    });

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    Category.belongsToMany(BlogPost, {
      as: 'BlogsPosts',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  }
  return PostCategory;
}

module.exports = PostCategoriesSchema;

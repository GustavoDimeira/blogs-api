/*module.exports = PostCategoriesSchema = (sequelize, dataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      title: 'post_id',
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      title: 'category_id',
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories'
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
};
*/
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const PostCategoriesSchema = (sequelize, dataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
      postId:  {
          title: 'post_id',
          type: dataTypes.INTEGER,
          foreignKey: true,
      },
      categoryId:  {
          title: 'category_id',
          type: dataTypes.INTEGER,
          foreignKey: true,
      },
  }, {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
  });

  postCategory.associate = ({ Category, BlogPost }) => {
      Category.belongsToMany(BlogPost, {
          as: 'blogPosts',
          through: postCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
      })

      BlogPost.belongsToMany(Category, {
          as: 'categories',
          through: postCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
      })
  };  

  return postCategory;
};

module.exports = PostCategoriesSchema;

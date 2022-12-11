const BlogPostSchema = (sequelize, dataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: dataTypes.INTEGER,
      title: 'user_id',
      primaryKey: true,
    },
    title: dataTypes.STRING,
    content: dataTypes.STRING,
    published: dataTypes.DATE,
    updated: dataTypes.DATE,
  },
    {
      primaryKey: true,
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts'
    });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, {
      as: 'user',
      through: BlogPost,
      foreignKey: 'userId',
    })
  };

  return BlogPost;
};

module.exports = BlogPostSchema;

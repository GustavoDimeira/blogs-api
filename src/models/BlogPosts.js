const BlogPostSchema = (sequelize, dataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: dataTypes.STRING,
    content: dataTypes.STRING,
    published: dataTypes.DATE,
    updated: dataTypes.DATE,
  });

  BlogPost.associete = ({ Users }) => {
    BlogPost.belongsTo(Users, {
      as: 'users',
      foreignKey: 'user_id',
    });
  }

  return BlogPost;
}

module.exports = BlogPostSchema;
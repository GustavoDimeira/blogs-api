module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('posts_categories', { 
        postId: {
          field: 'post_id',
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'blog_posts',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          type: Sequelize.INTEGER,
        },
        categoryId: {
          field: 'category_id',
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'categories',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          type: Sequelize.INTEGER,
        },
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories'); 
  }
};
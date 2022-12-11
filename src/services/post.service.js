const { BlogPost, User, PostCategory, Category } = require('../models');

const { removePassword } = require('../utilitis');

const getAllPosts = async () => {
  const users = await User.findAll();
  const posts = await BlogPost.findAll();
  const categories = await Category.findAll();
  const postCategory = await PostCategory.findAll();

  const response = posts.map((post) => {
    const postId = post.dataValues.userId;

    const userValues = users.find((userA) => userA.id === postId);
    const user = removePassword([userValues])[0];

    const PostAndCategory = postCategory.filter((postCat) => postCat.postId === postId);

    const finalCategories = PostAndCategory.map((postCat) => {
      const final = categories.find((c) => c.id === postCat.categoryId);
      return final;
    });

    return { ...post.dataValues, user, categories: finalCategories };
  }, []);

  return ({ mesage: response, type: 200 });
};

module.exports = { getAllPosts };

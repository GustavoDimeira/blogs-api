const { BlogPost, User, PostCategory, Category } = require('../models');

const { removePassword } = require('../utilitis');

const getInfos = async (id) => {
  let posts;
  if (id) {
    posts = await BlogPost.findAll({ where: { id } });
  } else {
    posts = await BlogPost.findAll();
  }
  
  const users = await User.findAll();
  const categories = await Category.findAll();
  const postCategory = await PostCategory.findAll();

  return { users, posts, categories, postCategory };
};

const getAllPosts = async (id) => {
  const { users, posts, categories, postCategory } = await getInfos(id);

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

  if (response.length === 1) {
    return ({ message: response[0], type: 200 });
  } if (response.length === 0) {
    return ({ message: { message: 'Post does not exist' }, type: 404 });
  }

  return ({ message: response, type: 200 });
};

module.exports = { getAllPosts };

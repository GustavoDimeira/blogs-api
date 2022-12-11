const express = require('express');

const router = express.Router();

const { tokenValidation } = require('../middlewares/token.validations');

const { getPosts } = require('../controllers/post.controller');

router.get(
  '/',
  tokenValidation,
  getPosts,
);

module.exports = router;

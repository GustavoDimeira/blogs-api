const express = require('express');

const router = express.Router();

const { tokenValidation } = require('../middlewares/token.validations');

const { categoryPost, getCategories } = require('../controllers/category.controller');

const {
  nameValidate,
} = require('../middlewares/category.validations');

router.get(
  '/',
  tokenValidation,
  getCategories,
);

router.post(
  '/',
  tokenValidation,
  nameValidate,
  categoryPost,
);

module.exports = router;

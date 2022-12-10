const express = require('express');

const router = express.Router();

const { userPost, getAllUsers } = require('../controllers/user.controller');

const {
  displayNameValidate, emailValidate, passwordValidate,
} = require('../middlewares/user.validations');

const { tokenValidation } = require('../middlewares/token.validations');

router.post(
  '/',
  displayNameValidate,
  emailValidate,
  passwordValidate,
  userPost,
);

router.get(
  '/',
  tokenValidation,
  getAllUsers,
);

module.exports = router;

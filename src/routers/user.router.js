const express = require('express');

const router = express.Router();

const { userPost } = require('../controllers/user.controller');

const {
  displayNameValidate, emailValidate, passwordValidate,
} = require('../middlewares/user.validations');

router.post(
  '/',
  displayNameValidate,
  emailValidate,
  passwordValidate,
  userPost,
);

module.exports = router;

const express = require('express');

const router = express.Router();

const { loginPost } = require('../controllers/login.controller');

const {
  loginValidate,
} = require('../middlewares/login.validations');

router.post(
  '/',
  loginValidate,
  loginPost,
);

module.exports = router;

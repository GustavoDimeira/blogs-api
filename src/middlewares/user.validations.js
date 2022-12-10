const displayNameValidate = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length >= 8) {
    return next();
  }
  res.status(400).json({
    message: '"displayName" length must be at least 8 characters long',
  });
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const emailFormat = email.split('@');
  if (emailFormat.length === 2) {
    return next();
  }
  res.status(400).json({
    message: '"email" must be a valid email',
  });
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;
  if (password.length >= 6) {
    return next();
  }
  res.status(400).json({
    message: '"password" length must be at least 6 characters long',
  });
};

module.exports = { displayNameValidate, emailValidate, passwordValidate };

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
  if (emailFormat.length === 2 && emailFormat[0].length > 0 && emailFormat[1].length > 0) {
    return next();
  }
  return res.status(400).json({
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

const idValidation = (req, res, next) => {
  const { params: { id } } = req;

  const test = isNaN(id);
  if (!test) {
    return next();
  }
  return res.status(400).json({ mesage: '"id" must be a number' });
};

module.exports = {
  displayNameValidate, emailValidate, passwordValidate, idValidation,
};

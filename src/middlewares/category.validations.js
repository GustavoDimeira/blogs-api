const nameValidate = (req, res, next) => {
  const { body: { name } } = req;
  if (name) {
    return next();
  }
  return res.status(400).json({ message: '"name" is required' });
};

module.exports = { nameValidate };

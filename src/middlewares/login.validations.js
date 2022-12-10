const loginValidate = (req, res, next) => {
const { email, password } = req.body;

if (email && password) {
  next(); 
} else {
  return res.status(400).json({ message: 'Some required fields are missing' });
}
};

module.exports = { loginValidate };
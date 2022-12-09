const UserSchema = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    displayName: dataTypes.STRING,
    email: dataTypes.STRING,
    password: dataTypes.STRING,
    image: dataTypes.STRING,
  });

return User;
}

module.exports = UserSchema;
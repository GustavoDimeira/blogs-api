const UserSchema = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: dataTypes.INTEGER,
    display_name: dataTypes.STRING,
    email: dataTypes.STRING,
    password: dataTypes.STRING,
    image: dataTypes.STRING,
  });

return User;
}

module.exports = UserSchema;
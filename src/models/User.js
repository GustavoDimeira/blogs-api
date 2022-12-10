const UserSchema = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    display_name: dataTypes.STRING,
    email: dataTypes.STRING,
    password: dataTypes.STRING,
    image: dataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  }
  );

return User;
}

module.exports = UserSchema;

const UserSchema = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: {
      type: dataTypes.STRING,
      title: 'display_name',
    },
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

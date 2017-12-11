module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('user', {
    username: {
      type: Datatypes.STRING,
      unique: true
    },
    email: {
      type: Datatypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    isAdmin: {
      type: Datatypes.BOOLEAN,
      defaultValue: false,
    },
    salt: {
      type: Datatypes.TEXT
    },
    hash: {
      type: Datatypes.TEXT
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Link);
    models.Link.belongsTo(User);
  };

  return User;
};


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
    salt: {
      type: Datatypes.TEXT
    },
    hash: {
      type: Datatypes.TEXT
    }
  });

  return User;
};

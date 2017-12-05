module.exports = (sequelize, Datatypes) => {
  const Language = sequelize.define('language', {
    name: {
      type: Datatypes.STRING,
    }
  });

  return Language;
};

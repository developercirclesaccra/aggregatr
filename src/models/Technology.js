module.exports = (sequelize, Datatypes) => {
  const Technology = sequelize.define('technology', {
    name: {
      type: Datatypes.STRING
    },
  });
  return Technology;
};

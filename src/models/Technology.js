module.exports = (sequelize, Datatypes) => {
  const Technology = sequelize.define('technology', {
    name: {
      type: Datatypes.STRING
    },
  });
  Technology.associate = (models) => {
    Technology.hasMany(models.Link);
    models.Link.belongsTo(Technology);
  };
  return Technology;
};

module.exports = (sequelize, Datatypes) => {
  const Language = sequelize.define('language', {
    name: {
      type: Datatypes.STRING,
    }
  });

  Language.associate = (models) => {
    Language.hasMany(models.Technology);
    models.Technology.belongsTo(Language);
  };

  return Language;
};

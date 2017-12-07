module.exports = (sequelize, Datatypes) => {
  const Link = sequelize.define('link', {
    title: {
      type: Datatypes.STRING,
    },
    url: {
      type: Datatypes.STRING,
    },
    description: {
      type: Datatypes.STRING,
    },
    author: {
      type: Datatypes.STRING,
    }
  });

  // Link.associate = (models) => {

  // }
  return Link;
};


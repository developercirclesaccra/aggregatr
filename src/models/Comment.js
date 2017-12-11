module.exports = (sequelize, Datatypes) => {
  const Comments = sequelize.define('comment', {
    comment: {
      type: Datatypes.STRING
    }
  });

  return Comments;
};

module.exports =  (sequelize, Datatypes ) => {
  const Vote = sequelize.define('vote', {
    vote: {
      type: Datatypes.BOOLEAN
    }
  });

  return Vote;
}
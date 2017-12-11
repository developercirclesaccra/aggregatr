const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_graphql_db', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

const db = {
  Language: sequelize.import('./Language'),
  Technology: sequelize.import('./Technology'),
  User: sequelize.import('./User'),
  Link: sequelize.import('./Link')
};


Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_graphql_db', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

const db = {
  Language: sequelize.import('./Language'),
};


db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;

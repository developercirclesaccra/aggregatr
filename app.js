require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./src/schema');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const models = require('./src/models/db');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const app = express();

const addUser = (req) => {
  const token = req.headers.authorization;
  try {
    const { user } = jwt.verify(token, SECRET);
    req.user = user;
  } catch (error) {
    console.error(error);
  }

  req.next();
};

app.use(cors('*'));
app.use(addUser);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({ schema, context: { models, SECRET, user: req.user } }))
);

models.sequelize.sync({ force: true }).then(() => app.listen(3000));

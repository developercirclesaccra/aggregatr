const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./src/schema');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const models = require('./src/models/db');

const app = express();

app.use(cors('*'));

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { models } })
);

models.sequelize.sync().then(() => app.listen(3000));

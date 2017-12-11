
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import schema from './src/schema';
import models from './src/models/db';

require('dotenv').config();

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

models.sequelize.sync().then(() => app.listen(3700));

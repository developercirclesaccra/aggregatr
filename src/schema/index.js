const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `

type Language {
  id: ID!
  name: String!
}

type Query {
  allLanguages: [Language!]!
}

type Mutation {
  createLanguage(name:String!): Language!
}

`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });

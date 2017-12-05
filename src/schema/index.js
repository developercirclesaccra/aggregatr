const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `

type Language {
  id: ID!
  name: String!
  technologies: [Technology!]!
}

type Technology {
  id: ID!
  name: String!
}

type Query {
  allLanguages: [Language!]!
  allTechnologies: [Technology!]!
}

type Mutation {
  createLanguage(name:String!): Language!
  createTechnology(name:String!, languageName:String!): Technology!
}

`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });

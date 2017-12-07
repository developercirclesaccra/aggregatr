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

type User {
  id: ID!
  username: String!
  email: String!
}

type Query {
  allLanguages(id:Int, name:String): [Language!]!
  allTechnologies(id:Int, name:String): [Technology!]!
  me: User!
}

type Mutation {
  createLanguage(name:String!): Language!
  createTechnology(name:String!, languageName:String!): Technology!
  register(username:String!, email:String!, password:String!): User!
  login(email:String!, password: String!): String!
}

`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });

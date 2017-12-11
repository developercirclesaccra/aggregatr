import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `

type Language {
  id: ID!
  name: String!
  technologies: [Technology!]!
}

type Technology {
  id: ID!
  name: String!
  links: [Link!]!
}

type User {
  id: ID!
  username: String!
  email: String!
  isAdmin: Boolean,
  links: [Link!]!
  myVotes: [Vote!]!
  myComments: [Comment!]!

}

type Vote {
  id: ID!
  vote:Boolean!
  user: User
}

type Comment {
  id: ID!
  comment: String!
  author: User
}

type Link {
  id: ID!
  url: String!
  title: String!
  description:String!
  author: Int
  votes: [Vote!]!
  comments: [Comment!]!
}

type Query {
  allLanguages(id:Int, name:String): [Language!]!
  allTechnologies(id:Int, name:String): [Technology!]!
  me: User!
  allUsers(id:Int, username:String, email:String, isAdmin:Boolean): [User!]!
  allLinks: [Link!]!
}

type Mutation {
  createLanguage(name:String!): Language!
  createTechnology(name:String!, languageName:String!): Technology!
  register(username:String!, email:String!, password:String!, isAdmin:Boolean): User!
  updateUser(username:String email:String ): User!
  login(email:String!, password: String!): String!
  createLink(url:String!, title:String!, description:String! author:Int, technologyName:String!):Link!
  createVote(linkId:Int!, vote:Boolean!):Vote!
  createComment(linkId:Int!, comment:String!): Comment!
}

`;
export default makeExecutableSchema({ typeDefs, resolvers });

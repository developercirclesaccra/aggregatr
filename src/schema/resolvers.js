const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = {
  Mutation: {
    createLanguage: (parent, args, { models: { Language } }) =>
      Language.create(args),
    createTechnology: async (parent, args, { models: { Language } }) => {
      const language = await Language.findOne({
        where: { name: args.languageName }
      });
      const technology = {
        name: args.name
      };
      return language.createTechnology(technology);
    },
    register: async (parent, args, { models: { User } }) => {
      const user = {
        username: args.username,
        email: args.email
      };
      user.salt = crypto.randomBytes(256).toString('hex');
      user.hash = crypto
        .pbkdf2Sync(args.password, user.salt, 1000, 64, 'sha512')
        .toString('hex');
      return User.create(user);
    },
    login: async (
      parent,
      args,
      { models: { User }, SECRET }
    ) => {
      const user = await User.findOne({ where: { email: args.email } });
      if (!user) {
        throw new Error('No user with that email');
      }
      const hash = crypto
        .pbkdf2Sync(args.password, user.salt, 1000, 64, 'sha512')
        .toString('hex');
      if (user.hash !== hash) {
        throw new Error('Incorrect Password');
      }
      const token = jwt.sign(
        { user: _.pick(user, ['id', 'username']) },
        SECRET,
        { expiresIn: '1y' }
      );
      return token;
    }
  },
  Query: {
    allLanguages: async (parent, args, { models: { Language } }) =>
      Language.findAll({ where: args }),
    allTechnologies: async (parent, args, { models: { Technology } }) =>
      Technology.findAll({ where: args }),
    me: async (parent, args, { user, models: { User } }) => {
      if (user) {
        return User.findOne({ where: { id: user.id } });
      } return null;
    }
  },
  Language: {
    technologies: language => language.getTechnologies()
  }
};

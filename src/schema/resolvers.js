import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import { requiresAuth, requiresAdmin } from './permissions';

module.exports = {
  Mutation: {
    createLanguage: requiresAdmin.createResolver((parent, args, { models: { Language } }) =>
      Language.create(args)),

    createTechnology: requiresAuth
      .createResolver(async (parent, args, { models: { Language } }) => {
        const language = await Language.findOne({
          where: { name: args.languageName }
        });
        const technology = {
          name: args.name
        };
        return language.createTechnology(technology);
      }),
    register: async (parent, args, { models: { User } }) => {
      const user = {
        username: args.username,
        email: args.email,
        isAdmin: args.isAdmin
      };
      user.salt = crypto.randomBytes(256).toString('hex');
      user.hash = crypto
        .pbkdf2Sync(args.password, user.salt, 1000, 64, 'sha512')
        .toString('hex');
      return User.create(user);
    },
    login: async (parent, args, { models: { User }, SECRET }) => {
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
        { user: _.pick(user, ['id', 'username', 'isAdmin']) },
        SECRET,
        { expiresIn: '1y' }
      );
      return token;
    },
    createLink: requiresAuth
      .createResolver(async (parent, args, { user, models: { User, Technology } }) => {
        const $user = await User.findOne({ where: { id: user.id } });
        const technology = await Technology.findOne({ where: { name: args.technologyName } });
        const link = {
          title: args.title,
          description: args.description,
          url: args.url,
          author: user.id,
          technologyId: technology.id
        };
        return $user.createLink(link);
      })
  },
  Query: {
    allLanguages: async (parent, args, { models: { Language } }) =>
      Language.findAll({ where: args }),
    allTechnologies: async (parent, args, { models: { Technology } }) =>
      Technology.findAll({ where: args }),
    me: async (parent, args, { user, models: { User } }) => {
      if (user) {
        return User.findOne({ where: { id: user.id } });
      }
      return null;
    },
    allUsers: requiresAdmin.createResolver(async (parent, args, { models: { User } }) =>
      User.findAll({ where: args })),
    allLinks: requiresAuth.createResolver(async (parent, args, { models: { Link } }) => {
      Link.findAll();
    })
  },
  Language: {
    technologies: language => language.getTechnologies()
  },
  User: {
    links: user => user.getLinks()
  },
  Technology: {
    links: technology => technology.getLinks()
  }
};

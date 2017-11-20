const { ObjectID } = require('mongodb');
const { URL } = require('url');
const pubsub = require('../pubsub');

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

function assertValidLink({ url }) {
  try {
    new URL(url);
  } catch (error) {
    throw new ValidationError('Link validation error: invalid url.', 'url');
  }
}
function buildFilters({ OR = [], description_contains, url_contains }) {
  const filter = description_contains || url_contains ? {} : null;
  if (description_contains) {
    filter.description = { $regex: `.*${description_contains}.*` };
  }
  if (url_contains) {
    filter.url = { $regex: `.*${url_contains}.*` };
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(buildFilters(OR[i]));
  }
  return filters;
}

module.exports = {
  Query: {
    allLinks: async (root, { filter, first, skip }, { mongo: { Links, Users } }) => {
      const query = filter ? { $or: buildFilters(filter) } : {};
      const cursor = Links.find(query);
      if (first) {
        cursor.limit(first);
      }
      if (skip) {
        cursor.skip(skip);
      }
      return cursor.toArray();
    },
    allCategories: async (root, data, { mongo: { Categories } }) => await Categories.find({}).toArray(),
  },
  Subscription: {
    Link: {
      subscribe: () => pubsub.asyncIterator('Link'),
    },
  },

  Mutation: {
    createLink: async (root, data, { mongo: { Links }, user }) => {
      assertValidLink(data);
      const newLink = Object.assign({ postedById: user && user._id }, data);
      const response = await Links.insert(newLink);
      newLink.id = response.insertedIds[0];
      pubsub.publish('Link', {
        Link: { mutation: 'CREATED', node: newLink }
      });

      return newLink;
    },
    createUser: async (root, data, { mongo: { Users } }) => {
      const newUser = {
        name: data.name,
        email: data.authProvider.email.email,
        password: data.authProvider.email.password
      };
      const response = await Users.insert(newUser);
      return Object.assign({ id: response.insertedIds[0] }, data);
    },
    createCategory: async (root, data, { mongo: { Categories } }) => {
      const newCategory = {
        language: data.language
      };
      const response = await Categories.insert(newCategory);
      return Object.assign({ id: response.insertedIds[0] }, newCategory);
    },
    createSubCategory: async (root, data, { mongo: { Categories, SubCategories } }) => {
      const category = await Categories.findOne({ language: data.language });
      const newSubCategory = {
        language: new ObjectID(category._id),
        name: data.name
      };
      const response = await SubCategories.insert(newSubCategory);
      return Object.assign({ id: response.insertedIds[0] }, newSubCategory);
    },
    createVote: async (root, data, { mongo: { Votes }, user }) => {
      const newVote = {
        userId: user && user._id,
        linkId: new ObjectID(data.linkId),
      };
      const response = await Votes.insert(newVote);
      return Object.assign({ id: response.insertedIds[0] }, newVote);
    },
    signinUser: async (root, data, { mongo: { Users } }) => {
      const user = await Users.findOne({ email: data.email.email });
      if (data.email.password === user.password) {
        return { token: `token-${user.email}`, user };
      }
    }
  },

  Link: {
    id: root => root._id || root.id,
    postedBy: async ({ postedById }, data, { dataloaders: { userLoader } }) =>
      await userLoader.load(postedById),
    votes: async ({ _id }, data, { mongo: { Votes } }) =>
      await Votes.find({ linkId: _id }).toArray()
  },
  User: {
    id: root => root._id || root.id,
    votes: async ({ _id }, data, { mongo: { Votes } }) =>
      await Votes.find({ userId: _id }).toArray(),
  },
  Category: {
    id: root => root._id || root.id,
    technologies: async ({ _id }, data, { mongo: { SubCategories } }) =>
      await SubCategories.find({ language: _id }).toArray(),
  },
  Vote: {
    id: root => root._id || root.id,

    user: async ({ userId }, data, { dataloaders: { userLoader } }) =>
      await userLoader.load(userId),

    link: async ({ linkId }, data, { mongo: { Links } }) =>
      await Links.findOne({ _id: linkId }),
  },
  SubCategory: {
    id: root => root._id || root.id
  }
};

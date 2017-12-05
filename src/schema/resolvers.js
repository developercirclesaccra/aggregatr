module.exports = {
  Mutation: {
    createLanguage: (parent, args, { models: { Language } }) =>
      Language.create(args)
  },
  Query: {
    allLanguages: async (parent, args, { models: { Language } }) =>
      Language.findAll()
  }
};

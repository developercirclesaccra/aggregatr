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
    }
  },
  Query: {
    allLanguages: async (parent, args, { models: { Language } }) =>
      Language.findAll(),
    allTechnologies: async (parent, args, { models: { Technology } }) =>
      Technology.findAll()
  },
  Language: {
    technologies: language => language.getTechnologies(),
  }
};

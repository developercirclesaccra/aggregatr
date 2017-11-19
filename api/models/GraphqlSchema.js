
const graphql = require('graphql');
const Seq = require('./db');

const Category = new graphql.GraphQLObjectType({
  name: 'Category',
  description: 'This represents a Category',
  fields() {
    return {
      id: {
        type: graphql.GraphQLInt,
        resolve(category) {
          return category.id;
        }
      },
      name: {
        type: graphql.GraphQLString,
        resolve(category) {
          return category.name;
        }
      },
      subcategories: {
        type: new graphql.GraphQLList(SubCategory),
        resolve(category) {
          return category.getSubcategories();
        }
      }
    };
  }
});

const SubCategory = new graphql.GraphQLObjectType({
  name: 'Subcategory',
  description: 'This represents a Subcategory',
  fields() {
    return {
      id: {
        type: graphql.GraphQLInt,
        resolve(subcategory) {
          return subcategory.id;
        }
      },
      name: {
        type: graphql.GraphQLString,
        resolve(subcategory) {
          return subcategory.name;
        }
      },
      entries: {
        type: new graphql.GraphQLList(Entry),
        resolve(subcategory) {
          return subcategory.getEntries();
        }
      }
    };
  }
});

const Entry = new graphql.GraphQLObjectType({
  name: 'Entry',
  description: 'This represents an Entry',
  fields() {
    return {
      id: {
        type: graphql.GraphQLInt,
        resolve(entry) {
          return entry.id;
        }
      },
      author: {
        type: graphql.GraphQLString,
        resolve(entry) {
          return entry.author;
        }
      },
      title: {
        type: graphql.GraphQLString,
        resolve(entry) {
          return entry.title;
        }
      },
      description: {
        type: graphql.GraphQLString,
        resolve(entry) {
          return entry.description;
        }
      },
      upvotes: {
        type: graphql.GraphQLInt,
        resolve(entry) {
          return entry.upvotes;
        }
      },
      downvotes: {
        type: graphql.GraphQLInt,
        resolve(entry) {
          return entry.downvotes;
        }
      },
      comments: {
        type: new graphql.GraphQLList(Comment),
        resolve(entry) {
          return entry.getComments();
        }
      }
    };
  }
});

const Comment = new graphql.GraphQLObjectType({
  name: 'Comment',
  description: 'This represents a comment',
  fields() {
    return {
      id: {
        type: graphql.GraphQLInt,
        resolve(comment) {
          return comment.id;
        }
      },
      author: {
        type: graphql.GraphQLString,
        resolve(comment) {
          return comment.author;
        }
      },
      comment: {
        type: graphql.GraphQLString,
        resolve(comment) {
          return comment.comment;
        }
      }
    };
  }
});

const Query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields() {
    return {
      categories: {
        type: new graphql.GraphQLList(Category),
        args: {
          id: {
            type: graphql.GraphQLInt
          }
        },
        resolve(root, args) {
          return Seq.models.category.findAll({
            where: args
          });
        }
      },
      subcategories: {
        type: new graphql.GraphQLList(SubCategory),
        args: {
          id: {
            type: graphql.GraphQLInt
          }
        },
        resolve(root, args) {
          return Seq.models.subcategory.findAll({
            where: args
          });
        }
      },
      entries: {
        type: new graphql.GraphQLList(Entry),
        args: {
          id: {
            type: graphql.GraphQLInt
          },
          author: {
            type: graphql.GraphQLString
          }
        },
        resolve(root, args) {
          return Seq.models.entry.findAll({
            where: args
          });
        }
      },
      comments: {
        type: new graphql.GraphQLList(Comment),
        args: {
          id: {
            type: graphql.GraphQLInt
          },
          author: {
            type: graphql.GraphQLString
          }
        },
        resolve(root, args) {
          return Seq.models.comment.findAll({
            where: args
          });
        }
      }
    };
  }
});

const Mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  description: 'Functions to create stuff',
  fields() {
    return {
      addCategory: {
        type: Category,
        args: {
          name: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
          }
        },
        resolve(_, args) {
          return Seq.models.category.create({
            name: args.name
          });
        }
      },
      addSubCategory: {
        type: SubCategory,
        args: {
          name: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
          },
          categoryname: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
          }
        },
        resovle(_, args) {
          return Seq.models.category
            .findOne({
              where: { name: args.categoryname },
              include: [{ model: Seq.models.subcategory }]
            })
            .then(category => category.createSubcategory({ name: args.name }));
        }
      },
      addComment: {
        type: Comment,
        args: {
          author: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
          },
          comment: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
          }
        },
        resolve(_, args) {
          return Seq.models.comment.create({
            author: args.author,
            comment: args.comment
          });
        }
      }
    };
  }
});

const Schema = new graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = Schema;

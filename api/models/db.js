const Sequelize = require('sequelize');

const Faker = require('faker');

const Schema = require('./Schema');

const Connection = new Sequelize(process.env.DATABASE_URL);

const Category = Connection.define('category', Schema.Category);
const SubCategory = Connection.define('subcategory', Schema.SubCategory);
const Entry = Connection.define('entry', Schema.Entry);
const Comment = Connection.define('comment', Schema.Comment);
const User = Connection.define('User', Schema.User);


/* relationships */
Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);
SubCategory.hasMany(Entry);
User.hasMany(Entry);
User.hasMany(Comment);
Entry.belongsTo(SubCategory);
Entry.hasMany(Comment);
Comment.belongsTo(Entry);

/* end */

const Auth = (async () => {
  try {
    await Connection.authenticate();
    await console.log('Connected to db');
    await Connection.sync({ force: true });
    for (let i = 0; i <= 9; i++) {
      await Category.create({
        name: Faker.address.country()
      })
        .then(category => category.createSubcategory({
          name: Faker.address.city()
        }))
        .then(subcategory => subcategory.createEntry({
          author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
          title: Faker.name.title(),
          description: Faker.lorem.sentences(),
          upvotes: Faker.random.number({
            min: 5,
            max: 50
          }),
          downvotes: Faker.random.number({
            min: 5,
            max: 50
          })
        }))
        .then(entry => entry.createComment({
          author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
          comment: Faker.lorem.sentence()
        }));
    }
  } catch (error) {
    console.error(error);
  }
})();

module.exports = Connection;


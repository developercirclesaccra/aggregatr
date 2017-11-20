const mongoose = require('mongoose');

const DBURL = 'mongodb://127.0.0.1/aggregate';
mongoose.Promise = global.Promise;
mongoose.connect(DBURL, { useMongoClient: true });
mongoose.connection.on('connected', () => {
  console.log(`Connected to ${DBURL}`);
});
mongoose.connection.on('error', (err) => {
  console.error(err);
});
mongoose.connection.on('disconnected', () => {
  console.log(`Disconnected from ${DBURL}`);
});

const CategorySchema = new mongoose.Schema({
  language: String,
  technologies: [SubCategorySchema]

});

const SubCategorySchema = new mongoose.Schema({
  name: String
});


module.exports = async () => {
  await mongoose.connect(DBURL, { useMongoClient: true });
  return {
    Category: mongoose.model('Category', CategorySchema),
    SubCategory: mongoose.model('Subcategory', SubCategorySchema)
  };
};

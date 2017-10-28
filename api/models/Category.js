const mongoose = require('mongoose');

const errorHandler = require('mongoose-mongodb-errors');

mongoose.Promise = global.Promise;

const CommentSchema = new mongoose.Schema({
  author: { type: String, required: 'Please provide an author for the comment' },
  date: { type: Date, default: Date.now },
  content: { type: String, required: 'Please provide a comment', trim: true }
});

const EntrySchema = new mongoose.Schema({
  name: {
    type: String, required: 'Please provide an entry name', trim: true, lowercase: true
  },
  author: {
    type: String, required: 'Please provide an author for the entry', lowercase: true, trim: true
  },
  description: { type: String, required: 'Please provide a description', trim: true },
  upvotes: { type: Number, required: true, default: 0 },
  downvotes: { type: Number, required: true, default: 0 },
  type: { type: String, required: true },
  comments: [CommentSchema]

});

const SubcategorySchema = new mongoose.Schema({
  name: {
    type: String, required: 'Please provide a subcategory name', lowercase: true, trim: true
  },
  logo: { type: String, required: 'Please provide a logo' },
  entries: [EntrySchema]
});

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: 'Please provide a category name' },
  logo: { type: String, required: 'Please provide a logo' },
  subcategories: [SubcategorySchema]
});

CategorySchema.plugin(errorHandler);

module.exports = mongoose.model('Category');


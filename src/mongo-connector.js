const { MongoClient } = require('mongodb');

// 1
const MONGO_URL = 'mongodb://127.0.0.1/hackernews';

// 2
module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {
    Links: db.collection('links'),
    Users: db.collection('users'),
    Votes: db.collection('votes'),
    Categories: db.collection('categories'),
    SubCategories: db.collection('subcategories'),
  };
};

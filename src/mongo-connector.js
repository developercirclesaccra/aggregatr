const { MongoClient } = require('mongodb');

// 1
const MONGO_URL = 'mongodb://tobi:tobi@ds113826.mlab.com:13826/aggregator';

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

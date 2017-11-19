const Sequelize = require("sequelize");

module.exports.Category = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

module.exports.SubCategory = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

module.exports.Entry = {
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  upvotes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  downvotes: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
};

module.exports.Comment = {
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: false
  }
};

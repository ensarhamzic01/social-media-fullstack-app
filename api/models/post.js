const Sequelize = require("sequelize");
const sequelize = require("../utils/mysql-connection");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Post;

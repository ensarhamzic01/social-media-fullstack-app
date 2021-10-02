const Sequelize = require("sequelize");
const sequelize = require("../utils/mysql-connection");

const Like = sequelize.define(
  "like",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["userId", "postId"],
      },
    ],
  }
);

module.exports = Like;

const Sequelize = require("sequelize");
const sequelize = require("../utils/mysql-connection");

const Follower = sequelize.define(
  "follower",
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
        fields: ["userId", "followerId"],
      },
    ],
  }
);

module.exports = Follower;

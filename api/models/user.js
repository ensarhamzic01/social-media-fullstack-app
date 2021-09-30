const Sequelize = require("sequelize");
const sequelize = require("../utils/mysql-connection");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING(45),
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;

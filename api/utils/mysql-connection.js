const { Sequelize } = require("sequelize");
const { SCHEMA, DB_USER, DB_PASS, HOST, DB_TYPE } = process.env;

const sequelize = new Sequelize(SCHEMA, DB_USER, DB_PASS, {
  host: HOST,
  dialect: DB_TYPE,
});

module.exports = sequelize;

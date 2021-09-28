const { Sequelize } = require("sequelize");
const { SCHEMA, DB_USER, DB_PASS, HOST, DB_TYPE } = process.env;

// const sequelize = new Sequelize(SCHEMA, DB_USER, DB_PASS, {
//   host: HOST,
//   dialect: DB_TYPE,
// });

const sequelize = new Sequelize("social-media", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

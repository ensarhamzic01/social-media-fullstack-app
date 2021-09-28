"use strict";

const users = [
  {
    name: "Ensar Hamzic",
    username: "ensarhamzic",
    email: "ensar@ensar.com",
    password: "ensar",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Lejla Hamzic",
    username: "lejlahamzic",
    email: "lejla@lejla.com",
    password: "lejla",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dzenana Hamzic",
    username: "dzenanahamzic",
    email: "dzenana@dzenana.com",
    password: "dzenana",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dzemila Hamzic",
    username: "dzemilahamzic",
    email: "dzemila@dzemila.com",
    password: "dzemila",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

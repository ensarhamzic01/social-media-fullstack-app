"use strict";

const posts = [
  {
    text: "Ensar Post",
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    text: "Second Post",
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    text: "Third Post",
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    text: "Fourth Post",
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("posts", posts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
  },
};

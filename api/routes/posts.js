const express = require("express");
const Router = express.Router();

const { create, like, unlike } = require("../controllers/posts");

Router.post("/", create);
Router.post("/:postId/like", like);
Router.delete("/:postId/like", unlike);

module.exports = Router;

const express = require("express");
const Router = express.Router();

const {
  create,
  like,
  unlike,
  addComment,
  deleteComment,
} = require("../controllers/posts");

Router.post("/", create);
Router.post("/:postId/like", like);
Router.delete("/:postId/like", unlike);
Router.post("/:postId/comment", addComment);
Router.delete("/:postId/comment", deleteComment);

module.exports = Router;

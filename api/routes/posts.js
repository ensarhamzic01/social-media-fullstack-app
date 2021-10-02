const express = require("express");
const Router = express.Router();

const {
  createPost,
  deletePost,
  like,
  unlike,
  addComment,
  deleteComment,
} = require("../controllers/posts");

Router.post("/", createPost);
Router.delete("/:postId", deletePost);
Router.post("/:postId/like", like);
Router.delete("/:postId/like", unlike);
Router.post("/:postId/comment", addComment);
Router.delete("/:postId/comment/:commentId", deleteComment);

module.exports = Router;

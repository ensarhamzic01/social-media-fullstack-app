const Post = require("../models/post");
const Like = require("../models/like");
const Comment = require("../models/comment");
const { Op } = require("sequelize");
const postValidation = require("../validation/post");

const createPost = async (req, res) => {
  try {
    const { user } = req;
    const { text } = req.body;
    // Joi validation
    const { error } = postValidation.validate({
      text,
    });
    if (error) throw new Error(error);
    await Post.create({
      userId: user.id,
      text,
    });
    res.status(200).json({ success: "Post successfully created" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;
    const post = await Post.findByPk(postId);
    if (post.userId !== userId) {
      throw new Error("Post is not yours");
    }
    await post.destroy();
    res.status(200).json({ success: "Post deleted" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const like = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;
    await Like.create({
      userId,
      postId,
    });
    res.status(200).json({ success: "Liked!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const unlike = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;
    await Like.destroy({
      where: {
        [Op.and]: [{ userId }, { postId }],
      },
    });
    res.status(200).json({ success: "Unliked!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const addComment = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;
    const { text } = req.body;
    await Comment.create({
      text,
      userId,
      postId,
    });
    res.status(200).json({ success: "Added comment!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { postId, commentId } = req.params;
    const comment = await Comment.findByPk(commentId);
    if (comment.id !== commentId) {
      throw new Error("Comment is not yours");
    }
    await comment.destroy();
    res.status(200).json({ success: "Deleted comment!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  createPost,
  deletePost,
  like,
  unlike,
  addComment,
  deleteComment,
};

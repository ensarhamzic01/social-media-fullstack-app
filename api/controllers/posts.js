const Post = require("../models/post");
const postValidation = require("../validation/post");

const create = async (req, res) => {
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

module.exports = {
  create,
};

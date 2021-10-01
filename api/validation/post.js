const Joi = require("joi");

const postsJoiSchema = Joi.object({
  text: Joi.string().required(),
});

module.exports = postsJoiSchema;

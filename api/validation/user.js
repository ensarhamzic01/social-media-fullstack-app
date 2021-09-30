const Joi = require("joi");

const usersJoiSchema = Joi.object({
  name: Joi.string().required().max(25),
  email: Joi.string().email().required().max(45),
  username: Joi.string().alphanum().required().min(3).max(20),
  password: Joi.string().min(5).max(30).required(),
});

module.exports = usersJoiSchema;

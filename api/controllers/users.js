const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userValidation = require("../validation/user");
const { Op } = require("sequelize");

// creates jwt token
const signToken = (id, username, expiresIn) => {
  return jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn });
};

const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    // Joi validation
    const { error } = userValidation.validate({
      name,
      email,
      username,
      password,
    });
    if (error) throw new Error(error);

    // Check if email and username are unique
    const notUnique = await User.findOne({
      where: {
        [Op.or]: [{ email: email }, { username: username }],
      },
    });
    if (notUnique) throw new Error("Email or username is already in use");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      username,
      password: hashedPassword,
    });
    const token = signToken(newUser.id, newUser.username, "1h");

    res.status(200).json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const signin = async (req, res) => {
  try {
    let foundUser = null;
    const { emailOrUsername, password } = req.body;
    // Find user
    if (emailOrUsername.includes("@")) {
      foundUser = await User.findOne({ where: { email: emailOrUsername } });
    } else {
      foundUser = await User.findOne({ where: { username: emailOrUsername } });
    }
    if (!foundUser) {
      throw new Error("Check your credentials and try again");
    }

    // Check if passwords match
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      throw new Error("Check your credentials and try again");
    }

    const token = signToken(foundUser.id, foundUser.username, "1h");
    res.status(200).json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    await User.destroy({ where: { id: userId } });
    res.status(200).json({ success: "Deleted user!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  signup,
  signin,
  deleteUser,
};

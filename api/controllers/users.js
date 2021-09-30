const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userValidation = require("../validation/user");
const { Op } = require("sequelize");

const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const { error } = userValidation.validate({
      name,
      email,
      username,
      password,
    });
    if (error) throw new Error(error);

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
    const token = jwt.sign(
      { username: newUser.username, id: newUser.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  signup,
};

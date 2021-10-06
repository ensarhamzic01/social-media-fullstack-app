const express = require("express");
const Router = express.Router();

const { signup, signin, deleteUser } = require("../controllers/users");
const checkAuth = require("../middleware/check-auth");

Router.post("/signup", signup);
Router.post("/signin", signin);
Router.delete("/", checkAuth, deleteUser);

// Verify user token
Router.post("/verify", checkAuth, (req, res) => {
  res.status(200).json({ success: "User is verified" });
});

module.exports = Router;

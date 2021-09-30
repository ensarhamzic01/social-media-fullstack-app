const express = require("express");
const Router = express.Router();

const { signup, signin } = require("../controllers/users");
const checkAuth = require("../middleware/check-auth");

Router.post("/signup", signup);
Router.post("/signin", signin);
Router.post("/verify", checkAuth);

module.exports = Router;

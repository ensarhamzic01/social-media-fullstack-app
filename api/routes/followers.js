const express = require("express");
const Router = express.Router();

const { follow, unfollow } = require("../controllers/followers");
const checkAuth = require("../middleware/check-auth");

Router.post("/", follow);
Router.delete("/", unfollow);

module.exports = Router;

const express = require("express");
const Router = express.Router();

const { signup } = require("../controllers/users");

Router.post("/signup", signup);

module.exports = Router;

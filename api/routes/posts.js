const express = require("express");
const Router = express.Router();

const { create } = require("../controllers/posts");

Router.post("/", create);

module.exports = Router;

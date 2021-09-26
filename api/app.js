const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const sequelize = require("./utils/mysql-connection");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`LISTENING ON PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();

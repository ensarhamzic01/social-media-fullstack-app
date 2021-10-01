const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const sequelize = require("./utils/mysql-connection");
const User = require("./models/user");
const Post = require("./models/post");
const Follower = require("./models/follower");
const usersRoutes = require("./routes/users");
const followersRoutes = require("./routes/followers");
const checkAuth = require("./middleware/check-auth");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/followers", checkAuth, followersRoutes);

// Table relations
User.hasMany(Post);
Post.belongsTo(User);
Follower.belongsTo(User, { as: "user" });
Follower.belongsTo(User, { as: "follower" });

(async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`LISTENING ON PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const sequelize = require("./utils/mysql-connection");

// Models import
const User = require("./models/user");
const Post = require("./models/post");
const Follower = require("./models/follower");
const Like = require("./models/like");
const Comment = require("./models/comment");

// Routes import
const usersRoutes = require("./routes/users");
const followersRoutes = require("./routes/followers");
const postsRoutes = require("./routes/posts");

// Middleware import
const checkAuth = require("./middleware/check-auth");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/followers", checkAuth, followersRoutes);
app.use("/api/posts", checkAuth, postsRoutes);

// Table relations
User.hasMany(Post, { onDelete: "cascade", foreignKey: { allowNull: false } });
Follower.belongsTo(User, { as: "user" });
Follower.belongsTo(User, { as: "follower" });
User.hasMany(Like, { onDelete: "cascade", foreignKey: { allowNull: false } });
Post.hasMany(Like, { onDelete: "cascade", foreignKey: { allowNull: false } });
User.hasMany(Comment, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Post.hasMany(Comment, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

(async () => {
  try {
    await sequelize.sync({ force: true });
    // await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();

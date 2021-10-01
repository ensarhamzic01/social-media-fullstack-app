const { Op } = require("sequelize");
const Follower = require("../models/follower");

const follow = async (req, res) => {
  try {
    const { user } = req;
    const followUserId = parseInt(req.body.id);
    if (user.id === followUserId) {
      throw new Error("You can't follow yourself.");
    }
    const notUnique = await Follower.findOne({
      where: { [Op.and]: [{ userId: user.id }, { followerId: followUserId }] },
    });
    if (notUnique) {
      throw new Error("You already followed this user");
    }
    await Follower.create({ userId: user.id, followerId: followUserId });
    res.status(200).json({ success: "User followed" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const unfollow = async (req, res) => {};

module.exports = {
  follow,
  unfollow,
};

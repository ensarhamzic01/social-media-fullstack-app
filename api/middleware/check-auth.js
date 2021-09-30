const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedData;
    res.status(200).json(req.user);
  } catch (e) {
    return res.status(401).json({ error: "Authentication failed" });
  }
};

module.exports = checkAuth;

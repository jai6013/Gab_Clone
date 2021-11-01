const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const authenticate = require("../middlewares/authenticate");

router.post("/", authenticate, async (req, res) => {
  try {
    const user_id = req.user._id;
    return res.status(201).json({ message: "can post, authorized" });
  } catch (err) {}
});

module.exports = router;

const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const Comment = require("../models/comment.model");
// Get all comments for a post

router.get("/forpost/:postid", authenticate, async (req, res) => {
  try {
    const comments = await Comment.find({ post_id: req.params.postid })
      .populate("author")
      .lean()
      .exec();

    return res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = router;

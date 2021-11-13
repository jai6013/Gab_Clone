const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const Comment = require("../models/comment.model");
// Get all comments for a post
const Post = require("../models/post.model");
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

router.post("/newcomment", authenticate, async (req, res) => {
  try {
    const newComment = {
      post_id: req.body.post_id,
      content: req.body.content,
      author: req?.user?._id,
    };
    let comment = await Comment.create(newComment);
    comment = await Comment.findById(comment?._id)
      .populate("author")
      .populate("post_id")
      .lean()
      .exec();
    await Post.findByIdAndUpdate(req.body.post_id, {
      $push: { comments: comment?._id },
    });
    return res.status(201).json(comment);
  } catch (err) {
    console.log(err);
    res.status.send(err);
  }
});

module.exports = router;

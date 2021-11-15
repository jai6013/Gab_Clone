const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const authenticate = require("../middlewares/authenticate");
const { body, validationResult } = require("express-validator");

// To create a post
router.post(
  "/",
  body("content")
    .exists()
    .isLength({ min: 1 })
    .withMessage("Contetent sshould not be empty"),
  authenticate,
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      // Validation for content
      if (errors.length > 0) return res.status(403).json({ errors });

      // new post with the used id as logged in user
      const newPost = {
        user_id: req?.user?._id,
        content: req?.body?.content,
      };
      // new post created
      const post = await Post.create(newPost);
      // created post pushed into logged in user's posts array
      const user = await User.findByIdAndUpdate(
        req?.user?._id,
        {
          $push: { posts: post?._id.toString() },
        },
        { new: true }
      )
        .populate("posts")
        .lean()
        .exec();

      return res
        .status(201)
        .send("new post created and pushed into user posts");
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);
// -------------------------------------------------------------------------

router.get("/top20", async (req, res) => {
  try {
    const posts = await Post.find().limit(20).populate("user_id").lean().exec();
    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(500).send(err);
  }
});

// To update post
router.patch("/:id", authenticate, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id).lean().exec();

    if (post.user_id !== req?.user?._id)
      return res
        .status(403)
        .json({ message: "You can't update someone elses post" });

    post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ message: "post updated", post });
  } catch (err) {
    return res.status(500).send(err);
  }
});
// -------------------------------------------------------------------------

// To delete post
router.delete("/:id", authenticate, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id).lean().exec();

    if (post.user_id !== req?.user?._id)
      return res
        .status(403)
        .json({ message: "You can't delete someone elses post" });

    await Post.findByIdAndRemove(req.params.id);
    return res.status(200).json({ message: "post deleted" });
  } catch (err) {
    return res.status(500).send(err);
  }
});
// -------------------------------------------------------------------------
// To like/dislike a post
router.patch("/:id/like", authenticate, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean().exec();
    // checking whether the user is already liked
    const isAlreadyLiked = post.likes.some((likedUser) =>
      likedUser.equals(req?.user?._id)
    );

    if (!isAlreadyLiked) {
      await Post.findByIdAndUpdate(
        req.params.id,
        { $push: { likes: req?.user?._id } },
        { new: true }
      );
      res.status(200).json({ message: "liked" });
    } else {
      await Post.findByIdAndUpdate(
        req.params.id,
        { $pull: { likes: req?.user?._id } },
        { new: true }
      );
      res.status(200).json({ message: "like removed" });
    }
  } catch (err) {
    // console.log(err);
    return res.status(500).send(err);
  }
});
// -------------------------------------------------------------------------

// get a post
router.get("/:id", authenticate, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("user_id")
      .populate("likes")
      .populate("comments")
      .lean()
      .exec();

    return res.status(200).json(post);
  } catch (err) {
    // console.log(err);
    return res.status(500).send(err);
  }
});
// -------------------------------------------------------------------------

// get timeline posts
router.get("/user/timeline", authenticate, async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 20;
    const offset = (page - 1) * limit;
    const posts = await Post.find({ user_id: req?.user?._id })
      .skip(offset)
      .limit(limit)
      .populate("likes")
      .populate("comments")
      .populate("user_id")
      .lean()
      .exec();

    return res.status(200).json(posts);
  } catch (err) {
    // console.log(err);
    return res.status(500).send(err);
  }
});
// -------------------------------------------------------------------------
// get feed posts
router.get("/user/feed", authenticate, async (req, res) => {
  console.log("feed");
  try {
    const { following } = await User.findById(req?.user?._id).lean().exec();
    // console.log(req);
    const posts = await Promise.all(
      following?.map((id) => Post.find({ user_id: id }).populate("user_id"))
    );
    const merged = [].concat.apply([], posts);
    return res.status(200).json(merged);
  } catch (err) {
    // console.log(err);
    return res.status(500).send(err);
  }
});
// -------------------------------------------------------------------------

module.exports = router;

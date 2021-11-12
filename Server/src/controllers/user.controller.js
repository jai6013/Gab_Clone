// Imports
const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { body, validationResult } = require("express-validator");
const authenticate = require("../middlewares/authenticate");
// -------------------------------------------------------------------

// Token Generator
const newToken = (user) => jwt.sign({ user }, process.env.JWT_KEY);
// -------------------------------------------------------------------

// Signup route
router.post(
  "/signup",
  body("username")
    .exists()
    .isLength({ min: 3 })
    .isAlphanumeric()
    .withMessage(
      "username should be minimum 3 characters and should not contain special characters"
    ),
  body("email").exists().isEmail().withMessage("nor a valid email id"),
  body("password")
    .exists()
    .isAlphanumeric()
    .isLength({ min: 6 })
    .withMessage("password should be alpha numeric with minimum 6 characters"),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);

      if (errors.length > 0) return res.status(400).json({ errors });

      let user = await User.findOne({ username: req.body.username })
        .lean()
        .exec();
      if (user)
        return res.status(403).json({ message: "username already exists" });
      user = await User.findOne({ email: req.body.email }).lean().exec();
      if (user)
        return res.status(403).json({ message: "email already exists" });

      // const newUser = {
      //   ...req.body,
      //   bio: "Default bio",
      //   cover_pic: "https://picsum.photos/820/312",
      //   profile_pic: "https://picsum.photos/200",
      // };

      user = await User.create(req.body);

      const token = newToken(user);
      return res.status(201).json({ token, user });
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
);
// ------------------------------------------------------------------

// Signin route
router.post(
  "/signin",
  body("email").exists().isEmail().withMessage("not a valid email id"),
  body("password")
    .exists()
    .isAlphanumeric()
    .isLength({ min: 6 })
    .withMessage("password should be minimum 6 characters and alphanumeric"),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) return res.status(403).json({ errors });

      let user = await User.findOne({ email: req.body.email }).exec();
      console.log(user);
      if (!user)
        return res
          .status(204)
          .json({ message: "No account found with the given email id" });

      if (!user.checkPassword(req.body.password))
        return res.status(403).json({ message: "Invalid Password" });
      user = await User.findOne({ email: req.body.email })
        .select("-password")
        ?.populate("posts")
        ?.populate("followers")
        ?.populate("following")
        ?.populate("groups")
        .lean()
        .exec();
      const token = newToken(user);

      return res.status(200).json({ token, user });
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
);

// To get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).lean().exec();
    return res.status(200).json({ data: users });
  } catch (err) {
    return res.status(400).send(err);
  }
});
// --------------------------------------------------------------------

router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req?.user?._id)
      .select("-password")
      ?.populate("posts")
      ?.populate("followers")
      ?.populate("following")
      ?.populate("groups")
      .lean()
      .exec();
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).send(err);
  }
});

// To get a single user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("posts")
      .populate("following")
      .populate("followers")
      .lean()
      .exec();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send(err);
  }
});
//

// To patch a single user
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err);
  }
});
// -----------------------------------------------------------------------

// To delete a single user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ id: req.params.id });

    return res.status(201).json({ message: "user deleted" });
  } catch (err) {
    return res.status(400).send(err);
  }
});
// -----------------------------------------------------------------------

// To follow a user
router.patch("/:id/follow", authenticate, async (req, res) => {
  try {
    if (req?.user?._id === req.params.id)
      return res.status(403).send("You can't follow yourself");
    const user = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req?.user?._id);
    if (!user?.followers.includes(loggedInUser?._id)) {
      await user.updateOne({ $push: { followers: req?.user?._id } });
      await loggedInUser.updateOne({ $push: { following: req?.params?.id } });
      return res.status(200).send("User has been followed");
    } else {
      return res.status(403).send("You're already following this user");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});
// ---------------------------------------------------------------------------

// To Unfollow a user
router.patch("/:id/unfollow", authenticate, async (req, res) => {
  try {
    if (req?.user?._id === req.params.id)
      return res.status(403).send("You can't unfollow yourself");
    const user = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req?.user?._id);
    if (user?.followers.includes(loggedInUser?._id)) {
      await user.updateOne({ $pull: { followers: req?.user?._id } });
      await loggedInUser.updateOne({ $pull: { following: req?.params?.id } });
      return res.status(200).send("User has been unfollowed");
    } else {
      return res.status(403).send("You're already not following this user");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});
// ---------------------------------------------------------------------------

module.exports = router;

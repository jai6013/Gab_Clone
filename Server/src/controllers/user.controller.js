// Imports
const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { body, validationResult } = require("express-validator");
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
      console.log(errors);

      if (errors.length > 0) return res.status(400).json({ errors });

      let user = await User.findOne({ username: req.body.username })
        .lean()
        .exec();
      if (user)
        return res.status(403).json({ message: "username already exists" });
      user = await User.findOne({ email: req.body.email }).lean().exec();
      if (user)
        return res.status(403).json({ message: "email already exists" });

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
      if (errors.length > 0) return res.status(403).json(errors);

      let user = await User.findOne({ email: req.body.email }).exec();
      if (!user)
        return res
          .status(400)
          .json({ message: "No account found with the given email id" });

      if (!user.checkPassword(req.body.password))
        return res.status(400).json({ message: "Invalid Password" });

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

// To get a single user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
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

router.patch("/:id/follow", async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;

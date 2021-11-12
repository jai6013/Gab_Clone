const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const { body, validationResult } = require("express-validator");
const Group = require("../models/group.model");

// To create a a group
router.post(
  "/",
  body("group_name")
    .exists()
    .isLength({ min: 3 })
    .withMessage("Group name should be minimum 3 characters"),
  authenticate,
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) return res.status(403).json(errors);
      req.body.admins = req?.user?._id;
      console.log(req.body, req?.user);
      // const group = await Group.create(req.body);
      // return res.status(201).json(group);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);
// ------------------------------------------------------------------------

// To get all groups
router.get("/", authenticate, async (req, res) => {
  try {
    const groups = await Group.find().lean().exec();
    return res.status(200).json(groups);
  } catch (err) {
    return res.status(500).send(err);
  }
});
// ------------------------------------------------------------------------

// To search for groups
router.get("/search", async (req, res) => {
  try {
    const query = new RegExp(req.query.q, "i");
    const groups = await Group.find({ group_name: query });
    res.status(200).json({ groups });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

// ----------------------------------------------------------------------------

// To join/exit a group
router.patch("/join/:id", authenticate, async (req, res) => {
  try {
    let group = await Group.findById(req.params.id).lean().exec();
    if (group.members.includes(req?.user?._id)) {
      group = await Group.findByIdAndUpdate(req.params.id, {
        $pull: { members: req?.user?._id },
      });
      return res.status(200).json({ message: "left the group" });
    }
    group = await Group.findByIdAndUpdate(req.params.id, {
      $push: { members: req?.user?._id },
    });

    return res.status(200).json({ message: "successfully joined" });
  } catch (err) {
    return res.status(500).send(err);
  }
});
// ------------------------------------------------------------------------

// To update group
router.patch("/update/:id", authenticate, async (req, res) => {
  try {
    let group = await Group.findById(req.params.id).lean().exec();
    if (!group.admins.includes(req?.user?._id))
      return res
        .status(403)
        .json({ message: "Only admin can update the group" });

    group = await Group.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(201).json(group);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});
// ------------------------------------------------------------------------

// To get a single group
router.get("/:id", authenticate, async (req, res) => {
  try {
    const group = await Group.findById(req.params.id).lean().exec();
    return res.status(200).json({ group });
  } catch (err) {
    return res.status(500).send(err);
  }
});
// ------------------------------------------------------------------------

// To delete a group
router.delete("/delete/:id", authenticate, async (req, res) => {
  try {
    let group = await Group.findById(req.params.id).lean().exec();
    if (!group.admins.includes(req?.user?._id))
      return res.status(403).json({ message: "Only admin can delete group" });
    await Group.findByIdAndRemove(req.params.id);
    return res.status(200).json({ message: "succesfully deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});
// ------------------------------------------------------------------------

module.exports = router;

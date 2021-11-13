const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    content: { type: String },
    likes: { type: Array },
    comments: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);

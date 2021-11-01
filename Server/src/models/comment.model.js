const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post_id: { type: String, required: true },
    user_id: { type: String, required: true },
    likes: { type: Array },
    comments: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);

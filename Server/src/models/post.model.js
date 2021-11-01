const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    images: { type: Array },
    content: { type: String, required: true },
    comments: { type: Array },
    likes: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("post", postSchema);

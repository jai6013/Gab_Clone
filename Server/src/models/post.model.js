const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    images: { type: Array },
    content: { type: String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    shares: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("post", postSchema);

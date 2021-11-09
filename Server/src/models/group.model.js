const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    group_name: { type: String, required: true },
    group_description: { type: String },
    cover_photo: { type: String, default: "https://picsum.photos/820/312" },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    isPublic: { type: Boolean, default: true },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("group", groupSchema);

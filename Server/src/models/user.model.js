const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    display_name: { type: String, required: true },
    profile_pic: { type: String, default: "https://picsum.photos/200" },
    cover_pic: { type: String, default: "https://picsum.photos/820/312" },
    groups: { type: Array },
    posts: { type: Array },
    following: { type: Array },
    followers: { type: Array },
    bio: { type: String, default: "This is default bio" },
    isVerified: { type: Boolean, default: false },
    notifications: { type: Array },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", function (next) {
  console.log(this.isModified("password"));
  if (!this.isModified("password")) return next();

  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);

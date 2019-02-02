const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Post = (module.exports = mongoose.model("Post", PostSchema));

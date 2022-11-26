const mongoose = require("mongoose");
const User = require("./User");

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  postedBy: {
    type: User.fullName,
    required: true,
  },
  likes: {
    type: Array,
    required: true,
  }
}, {timestamps: true});
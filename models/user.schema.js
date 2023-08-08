const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is require"],
    trim: true,
  },
  email: {
    type: String,
    uniqe: true,
    required: [true, "email address is required"],
  },
  password: {
    type: String,
    uniqe: true,
    minLength: [8, "Minimum length 8"],
  },
  number: {
    type: Number,
    uniqe: true,
  },
});

module.exports = mongoose.model("User", userSchema);

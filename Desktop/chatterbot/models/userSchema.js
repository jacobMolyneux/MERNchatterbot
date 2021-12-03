const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [3, "Username must be at least 3 characters long"],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be at least 8 characters long!"],
  },
});

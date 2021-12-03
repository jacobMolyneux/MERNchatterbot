const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  messages: [
    {
      author: { type: String, required: true },
      text: {
        type: String,
        required: true,
        minLength: [1, "Must be at least one character"],
        maxLength: [140, "messages can only be 140 character long!"],
      },
    },
  ],
});

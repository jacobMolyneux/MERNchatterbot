var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
    maxLength: [
      140,
      "Your message is too long! Must be less that 140 Characters",
    ],
    date: Date.now(),
  },
});

module.exports = mongoose.model("Message", MessageSchema);

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  password: { type: String, required: true, minLength: 5, maxLength: 32 },
  username: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);

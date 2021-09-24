var message = require("../models/messages");

exports.messages_page = function (req, res) {
  res.send(
    "Not Implemented: This page is the messages page. The user can see the messages in the group."
  );
};
exports.create_message = function (req, res) {
  res.send(
    "Not Implemented: this page should allow a person to create a message and send it to a ceratin group if they are a member"
  );
};

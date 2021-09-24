var User = require("../models/user.js");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

exports.index = function (req, res) {
  res.render("homepage");
};
exports.signUp = function (req, res) {
  res.render("signupForm");
};
exports.logIn = function (req, res) {
  res.send(
    "Not Ready Yet! This will be the log in page so that existing users can sign up for Our application"
  );
};
exports.createAccount = function (req, res, next) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

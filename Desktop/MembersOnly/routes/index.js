var express = require("express");
var router = express.Router();

var authController = require("../controllers/authController");
var messageController = require("../controllers/messageController");

/* GET home page. */
router.get("/", authController.index);

router.get("/signUp", authController.signUp);

router.post("/signUp", authController.createAccount);

router.get("/logIn", authController.logIn);

module.exports = router;

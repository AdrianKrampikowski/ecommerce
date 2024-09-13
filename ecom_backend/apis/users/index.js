const express = require("express");
const router = express.Router();
const userController = require("./controller");
const auth = require("../../middleware/auth");

router.route("/signup").post(userController.signUp);
router.route("/login").post(userController.login);
router.route("/getAllUsers").get(auth, userController.getAllUsers);
router.route("/getUser").post(userController.getUser);

module.exports = router;

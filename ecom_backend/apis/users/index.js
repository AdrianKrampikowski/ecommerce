const express = require("express");
const router = express.Router();
const userController = require("./controller");
const auth = require("../../middleware/auth");
const role = require("../../middleware/roles");

router.route("/signup").post(userController.signUp);
router.route("/login").post(userController.login);
router.route("/getAllUsers").get(auth, userController.getAllUsers);
router.route("/getUser").post(userController.getUser);
router.route("/updateUser").patch(auth, userController.updateUser);
router.route("/softDeleteUser").patch(auth, userController.softDeleteUser);
router.route("/changePassword").patch(auth, userController.changePassword);
router.route("/setNewAdmin").patch(auth, role, userController.setNewAdmin);


module.exports = router;
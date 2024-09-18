const express = require("express");
const router = express.Router();
const collectionController = require("./controller");
const auth = require("../../middleware/auth");
const role = require("../../middleware/roles");


router.route("/createCollection").post(auth, role, collectionController.createCollection);
router.route("/getAllCollections").get(auth, collectionController.getAllCollections);
router.route("/getCollection").get(auth, collectionController.getCollection);
router.route("/updateCollection").patch(auth, role, collectionController.updateCollection);
router.route("/softDeleteCollection").patch(auth, role, collectionController.softDeleteCollection);


module.exports = router;

const express = require("express");
const router = express.Router();
const collectionController = require("./controller");
const auth = require("../../middleware/auth");
const role = require("../../middleware/roles");


router.route("/createCollection").post(auth, role, collectionController.createCollection);
router.route("/getAllCollections").get(collectionController.getAllCollections);
router.route("/getCollection").get(collectionController.getCollection);
router.route("/updateCollection").patch(collectionController.updateCollection);

module.exports = router;

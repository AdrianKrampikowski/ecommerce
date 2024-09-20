const express = require("express");
const router = express.Router();
const subCollectionController = require("./controller");
const auth = require("../../middleware/auth");
const role = require("../../middleware/roles");
const paginationAndSorting = require("../../middleware/pagination_sorting");

router.route("/createSubCollection").post(auth, role, subCollectionController.createSubCollection);
router.route("/getAllSubCollections").get(auth,paginationAndSorting, subCollectionController.getAllSubCollections);
router.route("/getSubCollection").get(auth, subCollectionController.getSubCollection);
router.route("/updateSubCollection").patch(auth, role, subCollectionController.updateSubCollection);
router.route("/softDeleteSubCollection").patch(auth, role, subCollectionController.softDeleteSubCollection);

module.exports = router;
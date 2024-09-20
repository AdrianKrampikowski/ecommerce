const express = require("express");
const router = express.Router();
const productController = require("./controller");
const auth = require("../../middleware/auth");
const role = require("../../middleware/roles");
const paginationAndSorting = require("../../middleware/pagination_sorting");

router.route("/createProduct").post(auth, role, productController.createProduct);
router.route("/getAllProducts").get(auth,paginationAndSorting, productController.getAllProducts);
router.route("/getProduct").post(auth, productController.getProduct);
router.route("/updateProduct").patch(auth, role, productController.updateProduct);
router.route("/softDeleteProduct").patch(auth, role, productController.softDeleteProduct);


module.exports = router;
const express = require("express");
const router = express.Router();
const orderController = require("./controller");
const auth = require("../../middleware/auth");
const role = require("../../middleware/roles");
const paginationAndSorting = require("../../middleware/pagination_sorting");

router.route("/createOrder").post(auth, role, orderController.createOrder);
router.route("/createOrderByCustomer").post(orderController.createOrderByCustomer);
router.route("/getAllOrders").get(auth,paginationAndSorting, orderController.getAllOrders);
router.route("/getOrder").get(auth, orderController.getOrder);
router.route("/updateOrder").patch(auth, orderController.updateOrder);
router.route("/softDeleteOrder").patch(auth, role, orderController.softDeleteOrder);


module.exports = router;
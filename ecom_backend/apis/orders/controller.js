const Order = require("./model");

const createOrder = async (req, resp) => {
    try {
        let order = new Order(req.body);
        await order.save();
        resp.status(200).json(order);
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const createOrderByCustomer = async (req, resp) => {
    try {
        let order = new Order(req.body);
        await order.save();
        resp.status(200).json(order);
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getAllOrders = async (req, resp) => {
    try {
        const { page, limit, sortOptions } = req.pagination;
        const skip = (page - 1) * limit;

        const orders = await Order.find()
            .where("is_deleted", false)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);

        const totalItems = await Order.countDocuments();

        if (orders.length > 0) {
            resp.status(200).json({
                data: orders,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(totalItems / limit),
                    totalItems: totalItems,
                    pageSize: limit
                }
            });
        } else {
            resp.status(404).json({ message: "No order found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getOrder = async (req, resp) => {
    try {
        let order = await Order.findById(req.body.id).where("is_deleted", false);
        if (order) {
            resp.status(200).json(order);
        } else {
            resp.status(404).json({ message: "No order found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const updateOrder = async (req, resp) => {
    const { id, product, customer, payment_type } = req.body;
    try {
        let order = await Order.findById(id).where("is_deleted", false);
        if (order) {
            order.product = product;
            order.customer = customer;
            order.payment_type = payment_type;
            await order.save();
            resp.status(200).json(order);
        } else {
            resp.status(404).json({ message: "No order found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const softDeleteOrder = async (req, resp) => {
    try {
        let order = await Order.findById(req.body.id).where("is_deleted", false);
        if (order) {
            order.is_deleted = true;
            await order.save();
            resp.status(200).json({ message: "Order deleted" });
        } else {
            resp.status(404).json({ message: "No order found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};


module.exports = { createOrder, createOrderByCustomer, getAllOrders, getOrder, updateOrder, softDeleteOrder }
const Product = require("./model");

const createProduct = async (req, resp) => {
    try {
        let product = new Product(req.body);
        await product.save();
        resp.status(200).json(product);
    } catch (error) {
        resp.status(200).json({ message: error.message })
    }
};

const getAllProducts = async (req, resp) => {
    try {

    } catch (error) {

    }
};

module.exports = { createProduct, getAllProducts };
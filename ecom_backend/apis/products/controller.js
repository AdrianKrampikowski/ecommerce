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
        let products = await Product.find({}).where("is_deleted", false);
        if (products) {
            resp.status(200).json(products);
        } else {
            resp.status(404).json({ message: "no Products found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getProduct = async (req, resp) => {
    try {
        let product = await Product.findById(req.body.id).where("is_deleted", false);
        console.log('product', product);

        if (product) {
            resp.status(200).json(product);
        } else {
            resp.status(404).json({ message: "Product does not exist" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

module.exports = { createProduct, getAllProducts, getProduct };
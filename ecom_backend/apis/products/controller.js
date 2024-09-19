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
        if (product) {
            resp.status(200).json(product);
        } else {
            resp.status(404).json({ message: "Product does not exist" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const updateProduct = async (req, resp) => {
    const { id, title, description, media, collection_id, subcollection_id, price, inventory, variants, product_type, vendor, tags } = req.body;
    try {
        let product = await Product.findById(id);
        if (product) {
            product.title = title;
            product.description = description;
            product.media = media;
            product.collection_id = collection_id;
            product.subcollection_id = subcollection_id;
            product.price = price;
            product.inventory = inventory;
            product.variants = variants;
            product.product_type = product_type;
            product.vendor = vendor;
            product.tags = tags;
            await product.save();
            resp.status(200).json(product);
        } else {
            resp.status(404).json({ message: "Product does not exist" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const softDeleteProduct = async (req, resp) => {
    try {
        let product = await Product.findById(req.body.id).where("is_deleted", false);
        if (product) {
            product.is_deleted = true;
            await product.save();
            resp.status(200).json({ message: "Products deleted" });
        } else {
            resp.status(404).json({ message: "Product does not exist" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

module.exports = { createProduct, getAllProducts, getProduct, updateProduct, softDeleteProduct };


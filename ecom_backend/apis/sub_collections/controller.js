const SubCollection = require("./model");
const Products = require("../products/model");

const createSubCollection = async (req, resp) => {
    try {
        let subCollection = new SubCollection(req.body);
        await subCollection.save();
        resp.status(200).json(subCollection);
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getAllSubCollections = async (req, resp) => {
    try {
        let subCollections = await SubCollection.find({}).where("is_deleted", false);
        if (subCollections.length > 0) {
            resp.status(200).json(subCollections);
        } else {
            resp.status(404).json({ message: "no sub collection found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getSubCollection = async (req, resp) => {
    const { id, } = req.body;
    try {
        let subCollection = await SubCollection.findById({ _id: id }).where("is_deleted", false);
        if (subCollection) {
            resp.status(200).json(subCollection);
        } else {
            resp.status(404).json({ message: "no sub collection found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const updateSubCollection = async (req, resp) => {
    const { id, title, description, collection_id, collection_type, conditions, images, tags } = req.body;
    try {
        let subCollection = await SubCollection.findById({ _id: id }).where("is_deleted", false);
        if (subCollection) {
            subCollection.title = title;
            subCollection.description = description;
            subCollection.collection_id = collection_id;
            subCollection.collection_type = collection_type;
            subCollection.conditions = conditions;
            subCollection.images = images;
            subCollection.tags = tags;
            await subCollection.save();
            resp.status(200).json(subCollection);
        } else {
            resp.status(404).json({ message: "no sub collection found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const softDeleteSubCollection = async (req, resp) => {
    const { id } = req.body;
    try {
        let products = await Products.find({}).where("subcollection_id", id);
        if (products.length < 1) {
            let subCollection = await SubCollection.findById({ _id: id }).where("is_deleted", false);
            if (subCollection) {
                subCollection.is_deleted = true;
                await subCollection.save();
                resp.status(200).json(subCollection);
            } else {
                resp.status(404).json({ message: "no sub collection found" });
            }
        } else {
            resp.status(400).json({ message: "This sub collection is associated with other Products. To delete remove this products" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

module.exports = { createSubCollection, getAllSubCollections, getSubCollection, updateSubCollection, softDeleteSubCollection }




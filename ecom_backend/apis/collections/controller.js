const Collection = require("./model");

const createCollection = async (req, resp) => {
    try {
        let collection = new Collection(req.body);
        await collection.save();
        resp.status(200).json({ message: 'Collection created' });
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getAllCollections = async (req, resp) => {
    try {
        let collections = await Collection.find({}).where("is_deleted", false);
        if (collections) {
            resp.status(200).json(collections);
        } else {
            resp.status(404).json({ message: 'No Collection found' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

module.exports = { createCollection, getAllCollections };
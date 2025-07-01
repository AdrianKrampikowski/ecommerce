const Collection = require("./model");
const SubCollections = require("../sub_collections/model");

//123
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
        const { page, limit, sortOptions } = req.pagination;
        const skip = (page - 1) * limit;

        const collections = await Collection.find()
            .where("is_deleted", false)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);

        const totalItems = await Collection.countDocuments();

        if (collections.length > 0) {
            resp.status(200).json({
                data: collections,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(totalItems / limit),
                    totalItems: totalItems,
                    pageSize: limit
                }
            });
        } else {
            resp.status(404).json({ message: 'No Collection found' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getCollection = async (req, resp) => {
    const { id } = req.body;
    try {
        let collection = await Collection.find({ _id: id }).where("is_deleted", false);
        if (collection) {
            resp.status(200).json(collection);
        } else {
            resp.status(404).json({ message: 'Collection not found' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });

    }
};

const updateCollection = async (req, resp) => {
    const { id, title, description, conditions, images, tags } = req.body;
    try {
        let collection = await Collection.findById({ _id: id }).where("is_deleted", false);
        if (collection) {
            collection.title = title;
            collection.description = description;
            collection.conditions = conditions;
            collection.images = images;
            collection.tags = tags;
            await collection.save();
            resp.status(200).json({ message: "Collection updated" });
        } else {
            resp.status(404).json({ message: 'Updated failed' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const softDeleteCollection = async (req, resp) => {
    const { id } = req.body;
    try {
        let subCollections = await SubCollections.find({}).where("collection_id", id);
        console.log('subCollections', subCollections);

        if (subCollections.length < 1) {
            let collection = await Collection.findById({ _id: id }).where("is_deleted", false);
            if (collection) {
                collection.is_deleted = true;
                await collection.save();
                resp.status(200).json({ message: "Collection deleted" });
            } else {
                resp.status(404).json({ message: 'Deleting failed' });
            }
        } else {
            resp.status(404).json({ message: 'This collection is associated with other Collections. To delete remove this sub collection' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};


module.exports = { createCollection, getAllCollections, getCollection, updateCollection, softDeleteCollection };

const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema([{
    title: {
        type: String,
        required: [true, 'Title is be provided']
    },
    description: {
        type: String,
        required: [true, 'Description is be provided']
    },
    conditions: {
        type: Object
    },
    images: {
        type: String
    },
    tags: {
        type: String,
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
}]);

const collectionModel = mongoose.model("collections", collectionSchema);
module.exports = collectionModel;
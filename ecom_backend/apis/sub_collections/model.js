const mongoose = require("mongoose");

const subCollectionSchema = new mongoose.Schema([{
    title: {
        type: String,
        required: [true, 'Title is be provided']
    },
    description: {
        type: String,
        required: [true, 'Description is be provided']
    },
    collection_id: {
        type: String,
        required: [true, 'Collection ID is required']
    },
    collection_type: {
        type: String,
        enum: {
            values: [
                'manual', 'automated'
            ],
            message: `{Value} is not supported`
        },
        default: 'manual'
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

const subCollectionModel = mongoose.model("subcollections", subCollectionSchema);
module.exports = subCollectionModel;
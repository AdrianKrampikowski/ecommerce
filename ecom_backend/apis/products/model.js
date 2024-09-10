const mongoose = require("mongoose");

const productSchema = new mongoose.Schema([{
    title: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    media: {
        type: Object
    },
    collection_id: {
        type: String,
        required: [true, 'Category ID is required']
    },
    subcollection_id: {
        type: String,
        required: [true, 'Subcategory ID is required']
    },
    price: {
        type: Object,
        required: [true, 'Price is required']
    },
    inventory: {
        type: String,
        required: [true, 'Inventory is required']
    },
    variants: {
        type: Object
    },
    product_type: {
        type: String
    },
    vendor: {
        type: String,
        required: [true, 'Vendpor is required']
    },
    tags: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
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

const prodcutModel = mongoose.model('products', productSchema);
module.exports = prodcutModel;
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

    // collection_type: {
    //     type: String,
    //     enum: {
    //         values: [
    //             'manual', 'automated'
    //         ],
    //         message: `{Value} is not supported`
    //     },
    //     default: 'manual'
    // },

    // {
    //     "title": "Vintage Lamp",
    //     "description": "A beautiful vintage lamp from the 1920s, restored to excellent condition.",
    //     "conditions": {
    //       "condition": "Restored",
    //       "wear": "Minor scratches on the base"
    //     },
    //     "images": "https://example.com/images/vintage-lamp.jpg",
    //     "tags": "vintage, lamp, 1920s, restored"
    //   }

    //   {
    //     "title": "Mountain Bike",
    //     "description": "A high-performance mountain bike, perfect for rough terrains.",
    //     "conditions": {
    //       "condition": "New",
    //       "warranty": "2 years manufacturer warranty"
    //     },
    //     "images": "https://example.com/images/mountain-bike.jpg",
    //     "tags": "bike, mountain, new, sport"
    //   }
      

    //   {
    //     "title": "Leather Jacket",
    //     "description": "Genuine leather jacket, stylish and durable for all seasons.",
    //     "conditions": {
    //       "condition": "Used",
    //       "wear": "Slight wear on the sleeves"
    //     },
    //     "images": "https://example.com/images/leather-jacket.jpg",
    //     "tags": "jacket, leather, used, fashion"
    //   }

      
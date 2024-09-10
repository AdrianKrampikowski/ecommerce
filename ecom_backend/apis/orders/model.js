const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema([{
    product: {
        type: Object,
        required: [true, 'Product details are required']
    },
    customer: {
        type: Object
    },
    payment_type: {
        type: String,
        required: [true, 'Payment details are required']
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

const orderModel = mongoose.model('orders', orderSchema);
module.exports = orderModel;
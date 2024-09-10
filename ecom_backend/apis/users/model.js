const mongoose = require("mongoose");

const userSchema = new mongoose.Schema([{
    first_name: {
        type: String,
        required: [true, "Firstname must be provided"]
    },
    last_name: {
        type: String,
        required: [true, "Lastname must be provided"]
    },
    address: {
        type: String,
        required: [true, "Address must be provided"]
    },
    phone_number: {
        type: String,
        required: [true, "Phonenumber must be provided"]
    },
    email: {
        type: String,
        required: [true, "Email must be provided"]
    },
    password: {
        type: String,
        required: [true, "Password must be provided"]
    },
    is_admin: {
        type: Boolean,
        default: false
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
    },
}]);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
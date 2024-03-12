const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: String,
    city: String,
    country: String
})

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin','user'],
        default: 'user'
    },
    email: {
        type: String,
        required: false,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    UpdatedAt: {
        type: Date,
        default: () => Date.now()
    },
    address: addressSchema
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    street: String,
    city: String,
    country: String
});

const UserSchema = new Schema({
    // firstname: {
    //     type: String,
    // },
    // lastname: {
    //     type: String,
    // },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ['ADMIN','owner','user'],
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        // lowercase: true
    },
    // new field for restaurantId with default value as null
    resId: {
        type: Schema.Types.ObjectId,
        ref: "restaurant",
        default: null
    },
    location: {
        type: locationSchema,
        default: null
    },
    userImg:{
        type:String,
        required: false,
    },
    // OwnedResId:{
    //     type:String,
    //     required: false,
    // },
    phoneNumber:{
        type:Number,
        required:false
    },
    // location: {
    //     type: String,
    //     required: false
    // },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    UpdatedAt: {
        type: Date,
        default: () => Date.now()
    },
});

// const User = mongoose.model("User", UserSchema);
// module.exports = User;

module.exports = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum:['admin','user'],
        default:'user'
    },
    email : {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("User", UserSchema);

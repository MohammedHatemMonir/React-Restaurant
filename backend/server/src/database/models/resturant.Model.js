const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    resName: {
        type: String,
        required: [true, "Enter restaurant name"]
    },
    resImg: {
        type: String,
        required: [true, "Enter restaurant image"]
    },
    resBanner: {
        type: String,
        required: [true, "Enter restaurant banner"]
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: [true, "Enter restaurant rating"]
    },
    comment_num: {
        type: Number,
        required: [true, "Enter number of comments"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;

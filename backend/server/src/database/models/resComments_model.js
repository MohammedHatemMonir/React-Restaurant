const mongoose = require("mongoose");
const userModel = require("./userModel.js")

const rescommentSchema=mongoose.Schema({
    Comment:{
        type:String,
        require:[true,"Enter resturant ResImg"]
    },
    commentSentmint :{
        type:Array,
        require:[true,"Enter resturant ResImg"]
    },
    ResID: { type: String, ref: 'restaurant' },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

    // MealID: { type: ObjectId, ref: 'meal' }
})
module.exports = mongoose.model('rescomment', rescommentSchema);
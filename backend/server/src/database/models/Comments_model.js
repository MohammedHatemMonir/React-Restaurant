const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const commentSchema=mongoose.Schema({
    Comment:{
        type:String,
        require:[true,"Enter resturant ResImg"]
    },
    commentSentmint :{
        type:Array,
        require:[true,"Enter resturant ResImg"]
    },
    MealID: { type: String, ref: 'meal' },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

    // MealID: { type: ObjectId, ref: 'meal' }
})
module.exports = mongoose.model('comment', commentSchema);

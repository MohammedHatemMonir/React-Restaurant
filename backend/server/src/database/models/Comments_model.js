const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const commentSchema=mongoose.Schema({
    Comment:{
        type:String,
        require:[true,"Enter restaurant ResImg"]
    },
    commentSentmint :{
        type:Array,
        require:[true,"Enter restaurant ResImg"]
    },
    MealID: { type: ObjectId, ref: 'meal' }
})
module.exports = mongoose.model('comment', commentSchema);
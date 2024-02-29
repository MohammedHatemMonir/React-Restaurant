const mongoose = require("mongoose");
const rescommentSchema=mongoose.Schema({
    Comment:{
        type:String,
        require:[true,"Enter resturant ResImg"]
    },
    commentSentmint :{
        type:Array,
        require:[true,"Enter resturant ResImg"]
    },
    ResID: { type: String, ref: 'meal' }
    // MealID: { type: ObjectId, ref: 'meal' }
})
module.exports = mongoose.model('rescomment', rescommentSchema);
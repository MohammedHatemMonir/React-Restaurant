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
    ResID: { type: String, ref: 'meal' },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "user", required: true
    }

    // MealID: { type: ObjectId, ref: 'meal' }
})
module.exports = mongoose.model('rescomment', rescommentSchema);
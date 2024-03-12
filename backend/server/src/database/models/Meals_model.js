const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const mealSchema=mongoose.Schema({
    MealName:{
        type:String,
        require:[true,"Enter Meal name "]
    },
    MealImg:{
        type:String,
        require:[true,"Enter MealImg"]
    },
    Description:{
        type:String,
        require:[true,"Enter Meal Description"]
    },
    Price:{
        type:Number,
        require:[true,"Enter Meal Price"]
    },
    rating:{
        type:Number,
        require:[true,"Enter Meal rating"]
    },
    comment_num:{
        type:Number,
        require:[true,"Enter Meal rating"]
    },
    // ! What does that means ?
    ResID: { type: String, ref: 'restaurant' }
    // ResID: { type: ObjectId, ref: 'restaurant' }
})
module.exports = mongoose.model('Meal', mealSchema);
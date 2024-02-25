const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const mealSchema=mongoose.Schema({
    MealName:{
        type:String,
        require:[true,"Enter restaurant name "]
    },
    MealImg:{
        type:String,
        require:[true,"Enter restaurant ResImg"]
    },
    Description:{
        type:String,
        require:[true,"Enter restaurant ResImg"]
    },
    Price:{
        type:Number,
        require:[true,"Enter restaurant ResImg"]
    },
    ResID: { type: ObjectId, ref: 'restaurant' }
})
module.exports = mongoose.model('Meal', mealSchema);
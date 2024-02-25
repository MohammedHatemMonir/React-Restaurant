const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const mealSchema=mongoose.Schema({
    MealName:{
        type:String,
        require:[true,"Enter resturant name "]
    },
    MealImg:{
        type:String,
        require:[true,"Enter resturant ResImg"]
    },
    Description:{
        type:String,
        require:[true,"Enter resturant ResImg"]
    },
    Price:{
        type:Number,
        require:[true,"Enter resturant ResImg"]
    },
    ResID: { type: ObjectId, ref: 'restaurant' }
})
module.exports = mongoose.model('Meal', mealSchema);
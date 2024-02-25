const mongoose = require("mongoose");

const restaurantSchema=mongoose.Schema({
    ResName:{
        type:String,
        require:[true,"Enter restaurant name "]
    },
    ResImg:{
        type:String,
        require:[true,"Enter restaurant ResImg"]
    },
    Categoery:{
        type:String,
        require:[true,"Enter restaurant Categoery"]
    }
})

module.exports = mongoose.model("restaurant", restaurantSchema);
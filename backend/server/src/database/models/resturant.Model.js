const mongoose = require("mongoose");

const resturantSchema=mongoose.Schema({
    ResName:{
        type:String,
        require:[true,"Enter resturant name "]
    },
    ResImg:{
        type:String,
        require:[true,"Enter resturant ResImg"]
    },
    ResBanner:{
        type:String,
        require:[true,"Enter resturant ResBannar"]
    },
    Categoery:{
        type:String,
        require:[true,"Enter resturant Categoery"]
    },
    location: {
            type: String,
            required: true
        },
    rating:{
        type:Number,
        require:[true,"Enter resturant rating"]
    },
    // Mshehata addition to schema
    comment_num:{
        type:Number,
        require:[true,"Enter resturant rating"]
    },
})

module.exports = mongoose.model("restaurant", resturantSchema);
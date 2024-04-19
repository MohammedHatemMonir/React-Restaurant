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
        type: mongoose.Schema.Types.ObjectId, // Reference to the Category schema
        ref: 'Category', // Name of the Category model
        
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    Categoery:{ type: String, require:true},
})

module.exports = mongoose.model("restaurant", resturantSchema);
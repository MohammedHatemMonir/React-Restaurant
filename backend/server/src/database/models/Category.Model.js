const mongoose = require("mongoose");

const categoerySchema=mongoose.Schema({
    Categoery:{
        type: String,
        required: true
    },
    
})

const categoeryModel=mongoose.model('category',categoerySchema)

module.exports=categoeryModel
const mongoose = require("mongoose");

const categoerySchema=mongoose.Schema({
    Categoery:{
        type: String,
        ref: 'restaurant',
        required: true
    },
    ResID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant',
    required: true
}
})

const categoeryModel=mongoose.model('category',categoerySchema)

module.exports=categoeryModel
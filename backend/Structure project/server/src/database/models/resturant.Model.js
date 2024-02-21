import mongoose from "mongoose";

const resturantSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,"Enter name resturant"]
    },
    address:{
        type:String,
        require:[true,"Enter address resturant"]
    },
    phone:{
        type:String,
        require:[true,"Enter phone resturant"]
    }
})

export const resturant=mongoose.model('resturants',resturantSchema)


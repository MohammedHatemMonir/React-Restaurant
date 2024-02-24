
const resturant  = require("../../database/models/resturant.Model");
const getAllresturant=async(req,res)=>{
    try {
        const resturants=await resturant.find({})
        res.status(200).json(resturants)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const addNewresturant=async(req,res)=>{
    try {
        console.log(req.body)
        // const newresturant = new resturant(req.body);
        // await newresturant.save();
        const resturants=await resturant.create(req.body)
        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteresturant=async(req,res)=>{
    try {
        const {id}=req.params
        const resturants=await resturant.findByIdAndDelete(id)
        if(!resturants){
            return res.status(404).json({message:"resturant not found"})
        }
        res.status(200).json({message:"Deleted successfuly"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}


module.exports = {
    getAllresturant,
    addNewresturant,
    deleteresturant,
  };
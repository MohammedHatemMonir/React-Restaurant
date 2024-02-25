
const restaurant  = require("../../database/models/restaurants.Model");



const getAllrestaurant=async(req,res)=>{
    try {
        const restaurants=await restaurant.find({})
        res.status(200).json(restaurants)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const addNewrestaurant=async(req,res)=>{
    try {
        // console.log(req.body)
        const allowedMimetypes = ['jpeg', 'png', 'gif','jpg'];
        if (!allowedMimetypes.includes(req.body.ResImg.split('.').pop())) {
        return res.status(400).json({ error: 'Invalid image format' });
        }else {
            const restaurantname = req.body.ResName;
            const restaurants = await restaurant.find({ResName:restaurantname});
            if (!restaurants[0]) {
                const body = {
                    ResName:req.body.ResName,
                    ResImg:req.body.ResImg,
                    Categoery:req.body.Categoery}
                // const newrestaurant = new restaurant(req.body);
                // await newrestaurant.save();
                await restaurant.create(req.body)
                res.status(200).json(body)
            }else{
                res.send("Restaurant Does Exist");
        }}
    } catch (error) {
        res.status(500).json({message:error})
    }
}



// didnt try it yet
const deleterestaurant=async(req,res)=>{
    try {
        const {id}=req.params
        const restaurants=await restaurant.findByIdAndDelete(id)
        if(!restaurants){
            return res.status(404).json({message:"restaurant not found"})
        }
        res.status(200).json({message:"Deleted successfuly"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}


module.exports = {
    getAllrestaurant,
    addNewrestaurant,
    deleterestaurant,
  };
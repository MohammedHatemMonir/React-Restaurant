
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
        // console.log(req.body)
        const allowedMimetypes = ['jpeg', 'png', 'gif','jpg'];
        if (!allowedMimetypes.includes(req.body.ResImg.split('.').pop())) {
        return res.status(400).json({ error: 'Invalid image format' });
        }else {
            const restaurantname = req.body.ResName;
            const resturants = await resturant.find({ResName:restaurantname});
            if (!resturants[0]) {
                const body = {
                    ResName:req.body.ResName,
                    ResImg:req.body.ResImg,
                    Categoery:req.body.Categoery}
                // const newresturant = new resturant(req.body);
                // await newresturant.save();
                await resturant.create(req.body)
                res.status(200).json(body)
            }else{
                res.send("RESTURAND DOSE EXEST");
        }}
    } catch (error) {
        res.status(500).json({message:error})
    }
}



// didnt try it yet
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
const myusers = require("../../database/models/userModel");

const searchForUser=async(req,res)=>{
 try {
    const searchName=req.body.name
    const users=await myusers.aggregate([
        {
            $match: {
                name: { $regex: searchName, $options: "i" } 
              }
        },{$limit:10}
    ])
    res.json(users);
 } catch (error) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
 }
}

module.exports={searchForUser}
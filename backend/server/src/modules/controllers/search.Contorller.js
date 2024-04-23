const myusers = require("../../database/models/userModel");

const searchForUser=async(req,res)=>{ //{name:""}
 try {

   if(!req.session.user) res.status(401).json({ error: 'Not Authenticated' });
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
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
}

module.exports={searchForUser}
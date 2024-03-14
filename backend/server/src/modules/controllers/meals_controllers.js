const meal = require("../../database/models/Meals_model");
const resturant  = require("../../database/models/resturant.Model");
const { validationResult } = require("express-validator");


const addNewmeal = async (req, res) => { //{MealName:"",MealImg:"",Description:"",Price:"",Resid:""}
    try {
      const errors =validationResult(req)
      if(!errors.isEmpty()){
        res.status(400).json(errors.array()[0].msg)
      }else{

        if(req.session?.user?.role!="ADMIN") {
          res.status(500).json({message:"You are not Authenticated to add a meal"});
          return;
        }
      const MealName = req.body.MealName;

      const meals = await meal.find({MealName:MealName});
      if (!meals[0]) {
        // console.log(req.body.MealImg.split('.').pop() )
        const allowedMimetypes = ['jpeg', 'png', 'gif','jpg'];
        if (!allowedMimetypes.includes(req.body.MealImg.split('.').pop())) {
        return res.status(400).json({ error: 'Invalid image format' });
        }else {
            const Resid = req.body.Resid;
            
            const resturants = await resturant.find({_id:Resid});
            if (!resturants[0]) {
                res.send("RESTURAND DOSENT EXEST");
            }else{
              const comment_num=0
              const rating = 0
                const body = {
                  MealName:req.body.MealName,
                  MealImg:req.body.MealImg,
                  Description:req.body.Description,
                  Price:req.body.Price,
                  ResID:req.body.Resid,
                  rating:rating,
                  comment_num:comment_num}
                const meals = new meal(body);
                await meals.save();
                    // const meals=await meal.create(body)
                  //   new_Meals_num=resturants[0].Meals_num+1
                  //   test1=resturants[0].Meals_num+resturants[0].comment_num
                  //   new_res_rating=(resturants[0].rating*(test1))/(test1+1)
                  //   const res_body={
                  //     ResName: resturants[0].ResName,
                  //     ResImg: resturants[0].ResImg,
                  //     Categoery: resturants[0].Categoery,
                  //     rating:new_res_rating,
                  //     Meals_num:new_Meals_num,
                  //     comment_num:resturants[0].comment_num
                  // }
                  // const res_update = await resturant.updateOne({ _id: Resid },{ $set: res_body});
                res.status(201).json(body);
                    // console.log(req.body)

            }}
      } else {
        res.send("MEAL EXEST");
      }}
    } catch (err) {
      res.status(400).json({ error: err });
    }
};

  const getAllmeals = async (req, res) => {
    try {
      const errors =validationResult(req)
      if(!errors.isEmpty()){
        res.status(400).json(errors.array()[0].msg)
      }else{
        const restaurantname = req.body.ResName; // Res
        const resturants = await resturant.find({ResName:restaurantname});
        if (!resturants[0]) {
            res.send("RESTURAND DOSENT EXEST");
        }else{
            const ResID =resturants[0]._id.toString();
            const meals = await meal.find({ResID:ResID});
            // console.log(myuser[0].password)
            if (!meals[0]) {
                res.status(201).send("NO MEALS EXIST");
            }else{
                // console.log(meals)
                res.status(201).json(meals);
            }}}
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };

  module.exports = {
    addNewmeal,
    getAllmeals,
  };

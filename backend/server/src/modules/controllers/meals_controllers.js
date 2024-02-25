const meal = require("../../database/models/Meals_model");
const restaurant  = require("../../database/models/restaurant.Model");
const { validationResult } = require("express-validator");


const addNewmeal = async (req, res) => {
    try {
      const errors =validationResult(req)
      if(!errors.isEmpty()){
        res.status(400).json(errors.array()[0].msg)
      }else{
      const MealName = req.body.MealName;
      const meals = await meal.find({MealName:MealName});
      if (!meals[0]) {
        // console.log(req.body.MealImg.split('.').pop() )
        const allowedMimetypes = ['jpeg', 'png', 'gif','jpg'];
        if (!allowedMimetypes.includes(req.body.MealImg.split('.').pop())) {
        return res.status(400).json({ error: 'Invalid image format' });
        }else {
            const restaurantname = req.body.Res;
            const restaurants = await restaurant.find({ResName:restaurantname});
            if (!restaurants[0]) {
                res.send("RESTURAND DOSENT EXEST");
            }else{
                // console.log(restaurants[0]._id.toString())
                req.body.ResID=restaurants[0]._id.toString()
                const body = {
                    MealName:req.body.MealName,
                    MealImg:req.body.MealImg,
                    Description:req.body.Description,
                    Price:req.body.Price,
                    ResID:req.body.ResID}
                const meals = new meal(body);
                await meals.save();
                    // const meals=await meal.create(body)
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
        const restaurantname = req.body.Res;
        const restaurants = await restaurant.find({ResName:restaurantname});
        if (!restaurants[0]) {
            res.send("RESTURAND DOSENT EXEST");
        }else{
            const ResID =restaurants[0]._id.toString();
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

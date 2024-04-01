const meal = require("../../database/models/Meals_model");
const resturant  = require("../../database/models/resturant.Model");
const { Order } = require("../../database/models/orders");
const { OrderMeals } = require("../../database/models/orderMeal");
const { validationResult } = require("express-validator");
const uploadImg = require("../../utils/uploadImg.js"); 

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
            const Resid = req.body.Resid;
            const resturants = await resturant.find({_id:Resid});
            if (!resturants[0]) {
                res.send("RESTURAND DOSENT EXEST");
            }else{
              let mealimage=await uploadImg(req.body.MealImg)
              const comment_num=0
              const rating = 0
                const body = {
                  MealName:req.body.MealName,
                  MealImg:mealimage,
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

            }
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

// ========== Order ==========

// Create Order in specific restaurant
const createOrder = async (req, res) => {
  try {

    // req.session.user._id

    const restaurantId = req.body.ResId;
    const newOrderMeals = Promise.all(
      req.body.meals.map(async (meal) => {
        // console.log(req.body.meals);
        // let orderMeals = new Order({
        //   meals.id: meal.id,
        //   meals.quantity: meal.quantity,
        // });

        // let mealObject = {
        //   id: meal.id,
        //   quantity: meal.quantity
        // };

        let orderMeals = new OrderMeals({
          id: meal.id,
          // name: meal.name,
          quantity: meal.quantity,
        });

        // console.log(orderMeals);

        // const mealPriceFunc = async() => {
        //
        //   const mealPrice = await meal.findById(meal.id).populate("Price");
        //
        //   if (!mealPrice) {
        //     return res.status(404).json({ message: "Order meal price not found" });
        //   }
        //

        //   const mealPrices = mealPrice.Price * meal.quantity;

        //   return mealPrices;
        // }

        orderMeals = await orderMeals.save();
        return orderMeals;
      })
    );

    const orderMealsIdsResolved = await newOrderMeals;
    // console.log(orderMealsIdsResolved);
    // console.log("mealsIds", orderMealsIdsResolved);

    // if (
    //   !restaurantId ||
    //   !orderMealsIdsResolved ||
    //   !orderMealsIdsResolved.length
    // ) {
    //   return res
    //     .status(400)
    //     .json({
    //       message: "Missing required fields (restaurantId, orderMealsIds)",
    //     });
    // }

    // Find the restaurant
    const restaurant = await resturant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Find Valid meals and calculate total price
    // const validMeals = await meal.find({_id: { $in: mealIds }}); // Use $in operator for efficiency

    // ! Edit This Code

    // const validMeals = await Promise.all(orderMealsIdsResolved.map(async (orderMealId) => {
    //   orderMealsIds.findById(orderMealId);
    // }));
    // if(validMeals.length !== mealIds.length){
    //   return res.status(400).json({ message: "Invalid meal IDs provided"});
    // }
    //

    let orderMealsIds = Promise.all(
      req.body.meals.map(async (meal) => {
        let orderMeals = new OrderMeals({
          id: meal.id,
          // name: meal.name,
          quantity: meal.quantity,
        });

        orderMeals = await orderMeals.save();
        return orderMeals.id;
      })
    );

    orderMealsIds = await orderMealsIds;

    // try {
    const totalPrices = await Promise.all(
      orderMealsIdsResolved.map(async (mealIds) => {
        // let meal = {
        //   meals: mealIds
        // };
        //

        //   let mealObject = {
        //   id: meal.id,
        //   quantity: meal.quantity
        // };

        // let meal = new Order({
        //   meals: mealIds,
        // })
        const orderMeals = await OrderMeals.findById(mealIds).populate(
          "id",
          "Price"

          // path: "meals.id",
          // "Price",

          // "id",
          // "Price"
        );
        // console.log("OrderMeals", orderMeals);
        if (!orderMeals) {
          return res.status(404).json({ message: "Order meal not found" });
        }
        // const meal = orderMeals.meals;
        // if(!meal) {
        //   return res.status(404).json({ message: "Meal not found" });
        // }
        // const meal = orderMeals.meals.find(m => m.id.toString() === mealIds.id.toString());
        // if (!meal) {
        //   return res.status(404).json({ message: "Meal not found" });
        // }
        // const totalPrice = orderMeals.id.Price * orderMeals.quantity;
        const totalPrice = orderMeals.id.Price * mealIds.quantity;
        // console.log("totalPrice", totalPrice);
        return totalPrice;
      })
    );
    // }
    //  catch(error) {
    //   console.error("Error calculating total price:", error);
    //   return res.status(500).json({ message: "Internal server error" });
    // }

    const totalPrice = totalPrices.reduce((acc, meal) => acc + meal, 0);

    // Create a new order
    let newOrder = new Order({
      resId: restaurantId,
      meals: req.body.meals
        .map((meal) => ({
          id: meal.id,
          quantity: meal.quantity,
        }))
        .filter((meal) => meal.id !== null),
      // userId: req.user?.id,
      totalPrice: totalPrice,
      // user: req.session.user._id,
      // user: req.body.user
    });

    // const f = await OrderMeals.find({newOrder}, {_id: 0});
    // console.log("findFunction", f);

    // console.log(newOrder);

    // Save the order
    const savedOrder = await newOrder.save();

    const responseMeals = savedOrder.meals.map((meal) => ({
      id: meal.id,
      quantity: meal.quantity,
    }));

    if (!newOrder) {
      return res.status(400).send("The order cannot be created!");
    }
    // const f = await OrderMeals.findOne({_id});
    // console.log(f);
    // res
    // .status(201)
    // // .json({ message: "Order created successfully", order: newOrder });
    //

    res.status(201).json({
      message: "Order created successfully",
      order: {
        resId: savedOrder.resId,
        meals: responseMeals,
        totalPrice: savedOrder.totalPrice,
        status: savedOrder.status,
        _id: savedOrder._id,
        dateOrdered: savedOrder.dateOrdered,
      },
    });
  } catch (err) {
    console.error("Error crearting Order: ", err);
    res.status(500).json({ message: "Error creating order" });
  }
};





  module.exports = {
    addNewmeal,
    getAllmeals,
    createOrder
  };

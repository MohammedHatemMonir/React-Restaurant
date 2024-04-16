const meal = require("../../database/models/Meals_model");
const resturant  = require("../../database/models/resturant.Model");
const { Order } = require("../../database/models/orders");
const { validationResult } = require("express-validator");
const uploadImg = require("../../utils/uploadImg.js"); 
const mealComments=require('../../database/models/Comments_model.js')

const GetMealsWithComments = async (req, res) => {
  try {
    const { id } = req.params;
    const meals = await meal.find({ _id: id });
    const Comments = await mealComments.find({ MealID: id }).populate('user', 'name userImg -_id');
    res.status(200).json({ meal: meals, MealComments: Comments });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

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

  const updateMeal = async (req, res) => {
    try {
      if (!req.session.user || req.session.user.role !== "ADMIN") {
        return res.status(403).json({ error: "Not Authenticated as Admin" });
      }
  
      const { id } = req.params;
      const NewMealData = {};
  
      if (req.body.MealName) {
        NewMealData.MealName = req.body.MealName;
      }
      if (req.body.MealImg) {
        NewMealData.MealImg =await uploadImg(req.body.MealImg)
      }
      if (req.body.Description) {
        NewMealData.Description = req.body.Description;
      }
      if (req.body.Price) {
        NewMealData.Price = req.body.Price;
      }
  
      if (Object.keys(NewMealData).length === 0) {
        return res.status(400).json({ error: "No fields to update provided" });
      }
  
      const updatedMeal = await meal.findByIdAndUpdate(id, NewMealData, { new: true });
  
    
      if (!updatedMeal) {
        return res.status(404).json({ error: "Meal not found" });
      }
  
      
      res.status(200).json(updatedMeal);
    } catch (error) {
      console.error("Error updating meal:", error);
      res.status(500).json({ error: "Server error while updating meal" });
    }
  }
  
  const deleteMeal = async (req, res) => {
    try {
      if (!req.session.user || req.session.user.role !== "ADMIN") {
        return res.status(403).json({ error: "Not Authenticated as Admin" });
      }
      
      const { id } = req.params;
  
      const deletedMeal = await meal.findByIdAndDelete(id);

      if (!deletedMeal) {
        return res.status(404).json({ error: "Meal not found" });
      }
      await mealComments.deleteMany({MealID:id})

      if (deletedMeal.MealImg) {
        await uploadImg.deleteImage(deletedMeal.MealImg);
    }
      res.status(200).json({ message: "Meal deleted successfully" });
    } catch (error) {
      console.error("Error deleting meal:", error);
      res.status(500).json({ error: "Server error while deleting meal" });
    }
  }
  
// ========== Order ==========

// Create Order in specific restaurant
const createOrder = async (req, res) => {   // {ResId:"",meals:[{id:"",quantity:""}]}
  try {
    // 

    if(!req.session?.user?._id)  return res.status(404).json({ message: "Not authenticated!" });

    const restaurantId = req.body.ResId;
    const restaurant = await resturant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const mealPromises = req.body.meals.map(Meal => {
      return meal.findOne({ _id: Meal.id, ResID: restaurantId }).then(mealDoc => {
        if (mealDoc) {
          return { id: mealDoc.id,Price:mealDoc.Price, quantity: Meal.quantity };
        } else {
          return null;
        }
      });
    });


    let existingMeals;
    let totalPrice;

    await Promise.all(mealPromises)
            .then(results => {  
              existingMeals = results.filter(result => result !== null);


              totalPrice = existingMeals.reduce((total, mealObj) => {
                return total + mealObj.Price * mealObj.quantity;
              }, 0);

              console.log("Existing meals",existingMeals, "total Price", totalPrice); // This will be an array of objects, each containing a meal and a quantity
            })
            .catch(err => {
              console.error(err);
            });

    let order = new Order({
      resId: restaurantId,
      meals: existingMeals,
      totalPrice: totalPrice,
      user: req.session.user._id,
    });


    console.log("order",order);
    order = await order.save();


    res.status(201).json({
      message: "Order created successfully",
      order
    });


  } catch (err) {
    console.error("Error crearting Order: ", err);
    res.status(500).json({ message: "Error creating order" });
  }
};

const getMyOrders = async (req, res) => {
 
  if (!req.session?.user?._id) {
    return res.status(404).json({ message: "Not authenticated!" });
  }
  try {
    const orders = await Order.find({ user: req.session.user._id }, { _id: 0, resId: 0, meals: 0, __v: 0 });
    if (!orders || orders.length === 0) {
      return res.json({ message: "No orders found" });
    }

    return res.json({ orders });
  } catch (err) {
    console.error("Error fetching orders: ", err);
    return res.status(500).json({ message: "Error fetching orders" });
  }
};

// const orderDetails = async (req, res) => {
//   try {
//     if (!req.session?.user?._id) {
//       return res.status(404).json({ message: "Not authenticated!" });
//     }

//     const { orderId } = req.params;
//     const order = await Order.findById(orderId)
//       .populate('user', 'name email') 
//       .populate({
//         path: 'meals.id',
//         select: 'MealName Price MealImg', 
//         populate: { path: 'ResId', model: 'Restaurant', select: 'ResName' } 
//       });

//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     const orderDetails = {
//       _id: order._id,
//       user: order.user,
//       totalPrice: order.totalPrice,
//       meals: order.meals.map(meal => ({
//         _id: meal.id._id,
//         MealName: meal.id.MealName,
//         MealImg: meal.id.MealImg, 
//         Price: meal.id.Price,
//         quantity: meal.quantity 
//       })),
//     };

//     res.status(200).json({ order: orderDetails });
//   } catch (err) {
//     console.error("Error fetching order details: ", err);
//     res.status(500).json({ message: "Error fetching order details" });
//   }
// };


  module.exports = {
    addNewmeal,
    getAllmeals,
    createOrder,
    GetMealsWithComments,
    updateMeal,
    deleteMeal,
    getMyOrders,
    orderDetails
  };

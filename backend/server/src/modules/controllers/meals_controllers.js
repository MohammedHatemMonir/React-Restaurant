const meal = require("../../database/models/Meals_model");
const resturant  = require("../../database/models/resturant.Model");
const userModel = require("../../database/models/userModel.js");
const { Order } = require("../../database/models/orders");
const { validationResult } = require("express-validator");
const uploadImg = require("../../utils/uploadImg.js"); 
const mealComments=require('../../database/models/Comments_model.js');
const mongoose = require("mongoose");

const GetMealsWithComments = async (req, res) => {
  try {
    console.log("GetMealsWithComments")
    const { id } = req.params;
    // const meals = await meal.find({ _id: id });
    const Comments = await mealComments.find({ MealID: id }).sort({ createdAt: -1 }).populate('user', 'name userImg -_id');
    res.status(200).json({ MealComments: Comments });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log("Error fetching meal comments:", error);
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
     
    
    }
    } catch (err) {
      res.status(400).json({ error: err });
    }
};

  const getAllmeals = async (req, res) => { //{ResID:""}
    try {
      const errors =validationResult(req)
      if(!errors.isEmpty()){
        res.status(400).json(errors.array()[0].msg)
      }else{

            const meals = await meal.find({ResID:req.body.ResID});
            // console.log(myuser[0].password)
            if (!meals?.length > 0) {
                res.status(201).send("NO MEALS EXIST");
            }else{
                // console.log(meals)
                res.status(201).json(meals);
            }}
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };

  const updateMeal = async (req, res) => {
    try {
      const { id } = req.params;
        const userId = req.session?.user?._id;
        const resId=await meal.find({_id:id})
        const checkOwner = await resturant.findOne({ _id: resId.resId, ownerId: userId });
      if (req.session.user.role !== "ADMIN"||(req.session.user.role !== "owner" && !checkOwner)) {
        return res.status(403).json({ error: "Not Authenticated as Owner" });
      }
  
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
      const { id } = req.params;
        const userId = req.session?.user?._id;
        const resId=await meal.find({_id:id})
        const checkOwner = await resturant.findOne({ _id: resId.resId, ownerId: userId });
      if (req.session.user.role !== "ADMIN"||(req.session.user.role !== "owner" && !checkOwner)) {
        return res.status(403).json({ error: "Not Authenticated as owner" });
      }
      
      
  
      const deletedMeal = await meal.findByIdAndDelete(id);

      if (!deletedMeal) {
        return res.status(404).json({ error: "Meal not found" });
      }
      res.status(200).json({ message: "Meal deleted successfully" }); //Responded here to optimize the response time


      await mealComments.deleteMany({MealID:id})

      if (deletedMeal.MealImg) {
        await uploadImg.deleteImage(deletedMeal.MealImg);
      }

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
      success: true,
      message: "Order created successfully",
      order
    });


  } catch (err) {
    console.error("Error crearting Order: ", err);
    res.status(500).json({ message: "Error creating order" });
  }
};

const getMyOrders = async (req, res) => {

  try {
  
    if (!req.session?.user?._id) {
      return res.status(404).json({ message: "Not authenticated!" });
    }
    const orders = await Order.find({ user: req.session.user._id }, {resId: 0, meals: 0, __v: 0 });
    if (!orders || orders.length === 0) {
      return res.json({ message: "No orders found" });
    }

    return res.json({ orders });
  } catch (err) {
    console.error("Error fetching orders: ", err);
    return res.status(500).json({ message: "Error fetching orders" });
  }
};

// const getOrderDetails = async (req, res) => {
//   try {
//     if (!req.session?.user?._id) {
//       return res.status(404).json({ message: "Not authenticated!" });
//     }
    
//     const { orderId } = req.params;

//     const order = await Order.aggregate([
//       {
//         $match: { _id: new mongoose.Types.ObjectId(orderId) }
//       },
//       {
//         $lookup: {
//           from: "meals",
//           localField: "meals.id",
//           foreignField: "_id",
//           as: "mealDetails"
//         }
//       },
//       {
//         $unwind: "$mealDetails"
//       },
//       {
//         $lookup: {
//           from: "restaurants",
//           localField: "resId",
//           foreignField: "_id",
//           as: "restaurantDetails"
//         }
//       },
//       {
//         $unwind: "$restaurantDetails"
//       },
//       {
//         $project: {
//           _id: 0,
//           ResName: "$restaurantDetails.ResName",
//           MealName: "$mealDetails.MealName",
//           MealImg: "$mealDetails.MealImg",
//           Price: "$mealDetails.Price",
//           Quantity: "$meals.quantity",
//           totalPrice: 0
//         }
//       }
//     ]);

//     if (!order || order.length === 0) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     res.status(200).json(order[0]);
//   } catch (error) {
//     console.error("Error fetching order details:", error);
//     res.status(500).json({ error: "Server error while fetching order details" });
//   }
// };
const getOrderDetails = async (req, res) => {
  try {
    // Check if user is authenticated
    if (!req.session?.user?._id) {
      return res.status(404).json({ message: "Not authenticated!" });
    }
    
    // Extract orderId from request parameters
    const { orderId } = req.params;

    // Find the order by orderId
    const order = await Order.findById(orderId);

    // If order not found, return 404 status
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Initialize an array to store meal details
    const mealDetails = [];


    for (const Meal of order.meals) {
  try {
    const mealDoc = await meal.findById(Meal.id);
    if (mealDoc) {
      mealDetails.push({
        MealName: mealDoc.MealName,
        MealImg: mealDoc.MealImg,
        Price: mealDoc.Price,
        Quantity: Meal.quantity
      });
    } else {

      console.log(`Meal with ID ${Meal.id} not found.`);
      
    }
  } catch (error) {
    console.log(`Error fetching meal with ID ${Meal.id}:`, error);
    
  }
}
console.log(mealDetails[1])
    const resName = await resturant.findById(order.resId);

    
    const result = {
      _id: order._id,
      ResName: resName ? resName.ResName : "Unknown Restaurant",
      meals: mealDetails,
      //totalPrice: order.totalPrice, 
    };
    res.status(200).json(result);
  } catch (error) {
    console.log("Error fetching order details:", error);
    res.status(500).json({ error: "Server error while fetching order details" });
  }
};








  module.exports = {
    addNewmeal,
    getAllmeals,
    createOrder,
    GetMealsWithComments,
    updateMeal,
    deleteMeal,
    getMyOrders,
    getOrderDetails
  };

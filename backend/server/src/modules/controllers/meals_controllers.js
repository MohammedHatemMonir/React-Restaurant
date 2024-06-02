const meal = require("../../database/models/Meals_model");
const resturant = require("../../database/models/resturant.Model");
const userModel = require("../../database/models/userModel.js");
const { Order } = require("../../database/models/orders");
const { validationResult } = require("express-validator");
const uploadImg = require("../../utils/uploadImg.js");
const mealComments = require('../../database/models/Comments_model.js');
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

const addNewmeal = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }

    const { role ,_id} = req.session.user
    if (role !== "owner" && role !== "ADMIN") {
      return res.status(403).json({ message: "You are not authenticated to add a meal" });
    }

    const { MealName, MealImg, Description, Price, Resid } = req.body;

    // Check if restaurant exists and if the user is the owner
    const restaurant = await resturant.findOne({ _id: Resid });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant does not exist or you are not the owner" });
    }

    if (role === "owner" && restaurant.ownerId?.toString() !== _id.toString()) {
      return res.status(403).json({ message: "You do not own this restaurant" });
    }

    // const existingMeal = await meal.findOne({ MealName, ResID: Resid });
    // if (existingMeal) {
    //   return res.status(400).json({ message: "Meal already exists" });
    // }

    // Upload meal image
    const mealImage = await uploadImg(MealImg);

    // Create meal
    const newMeal = new meal({
      MealName,
      MealImg: mealImage,
      Description,
      Price,
      ResID: Resid,
      rating: 0,
      comment_num: 0
    });

    let savedMeal = await newMeal.save();

    const orders = await Order.find({ resId: Resid }).select('user'); 
    console.log("darsh orders",orders.user)
    const users = orders.map(order => order.user.toString());
    console.log("darsh users", users)
    const uniqueUsers = [...new Set(users)];

    console.log(`Notifying ${uniqueUsers.length} users about the new meal`);

    uniqueUsers.forEach(userId => {
      global.io.to(userId).emit("new-notification", {
        message: `Restaurant ${restaurant._id} has added a new meal: ${newMeal.MealName}`,
        time: Date.now().toString(),
        link: "/tutorials"
      });
    });
    
    global.io.to(restaurant.ownerId?.toString()).emit("new-notification", {
      message: `The meal has been successfully added`,
      time: Date.now().toString(),
      link: "/tutorials"
    });


    res.status(201).json(newMeal);
  } catch (err) {
    console.error("Error adding new meal:", err);
    res.status(500).json({ error: "Server error while adding new meal" });
  }
};

const getAllmeals = async (req, res) => { //{ResID:""}
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array()[0].msg)
    } else {

      const meals = await meal.find({ ResID: req.body.ResID });
      // console.log(myuser[0].password)
      if (!meals?.length > 0) {
        res.status(201).send("NO MEALS EXIST");
      } else {
        // console.log(meals)
        res.status(201).json(meals);
      }
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const updateMeal = async (req, res) => {
  try {
    if (!req.session?.user?._id) return res.status(404).json({ message: "Not authenticated!" });
    if (req.session?.user?.role === "user") {
      return res.status(403).json({ message: "You are not authenticated to update a meal" });
    }
    const { id } = req.params;
    const userId = req.session?.user?._id;
    


    const mealToUpdate = await meal.findById(id);
    if (!mealToUpdate) {
      return res.status(404).json({ error: "Meal not found" });
    }

    const restaurant = await resturant.findOne({ _id: mealToUpdate.ResID });
    if (!restaurant && req.session.user.role !== "ADMIN") {
      return res.status(403).json({ error: "Not authenticated as owner" });
    }

    const newMealData = {};
    console.log("Meal img",req.body.MealImg)
    if (req.body.MealName) newMealData.MealName = req.body.MealName;
    if (req.body.MealImg != null) newMealData.MealImg = await uploadImg(req.body.MealImg);
    if (req.body.Description) newMealData.Description = req.body.Description;
    if (req.body.Price) newMealData.Price = req.body.Price;

    if (Object.keys(newMealData).length === 0) {
      return res.status(400).json({ error: "No fields to update provided" });
    }

    const updatedMeal = await meal.findByIdAndUpdate(id, newMealData, { new: true });
    global.io.to(restaurant.ownerId?.toString()).emit("new-notification", {message: `Meal updated`, time: Date.now().toString(), link: "/tutorials" });

    res.status(200).json(updatedMeal);

  } catch (error) {
    console.error("Error updating meal:", error);
    res.status(500).json({ error: "Server error while updating meal" });
  }
};

const deleteMeal = async (req, res) => {
  try {


    if (!req.session?.user?._id) return res.status(404).json({ message: "Not authenticated!" });
    if (req.session?.user?.role === "user") {
      return res.status(403).json({ message: "You are not authenticated to delete a meal" });
    }
    const { id } = req.params;
    const mealToDelete = await meal.findById(id);
    if (!mealToDelete) {
      return res.status(404).json({ error: "Meal not found" });
    }

    const restaurant = await resturant.findOne({ _id: mealToDelete.ResID});
    if (!restaurant && req.session.user.role !== "ADMIN") {
      return res.status(403).json({ error: "Not authenticated as owner" });
    }

    await meal.findByIdAndDelete(id);
    global.io.to(restaurant.ownerId?.toString()).emit("new-notification", {message: `Meal deleted`, time: Date.now().toString(), link: "/tutorials" });

    res.status(200).json({ message: "Meal deleted successfully" });

    await mealComments.deleteMany({ MealID: id });

    if (mealToDelete.MealImg) {
      await uploadImg.deleteImage(mealToDelete.MealImg);
    }
  } catch (error) {
    console.error("Error deleting meal:", error);
    res.status(500).json({ error: "Server error while deleting meal" });
  }
};

// ========== Order ==========

// Create Order in specific restaurant
const createOrder = async (req, res) => {   // {ResId:"",meals:[{id:"",quantity:""}]}
  try {
    // 

    if (!req.session?.user?._id) return res.json({ message: "Not authenticated!" });

    const restaurantId = req.body.ResId;
    const restaurant = await resturant.findById(restaurantId);

    if (!restaurant) {
      return res.json({ message: "Restaurant not found" });
    }

    const mealPromises = req.body.meals.map(Meal => {
      return meal.findOne({ _id: Meal.id, ResID: restaurantId }).then(mealDoc => {
        if (mealDoc) {
          return { id: mealDoc.id, Price: mealDoc.Price, quantity: Meal.quantity };
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

        console.log("Existing meals", existingMeals, "total Price", totalPrice); // This will be an array of objects, each containing a meal and a quantity
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


    console.log("order", order);
    order = await order.save();

    global.io.to(restaurant.ownerId?.toString()).emit("new-notification", {message: `Someone created an order`, time: Date.now().toString(), link: "/tutorials" });
    global.io.to(req.session?.user?._id).emit("new-notification", {message: `Your order has been successfully created`, time: Date.now().toString(), link: "/tutorials" });

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
    const orders = await Order.find({ user: req.session.user._id }, { resId: 0, meals: 0, __v: 0 });
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

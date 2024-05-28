const { Order } = require("../../database/models/orders");
const resComments_model = require("../../database/models/resComments_model.js");
const userModel = require("../../database/models/userModel.js");

const allRestaurantOrders = async (req, res) => {
    try {
        // Get the current date and set the time to the start of the day
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        // Query orders made today
        const todayOrders = await Order.find({ createdAt: { $gte: startOfDay } });

        // Group orders by restaurant ID and calculate totals
        const restaurantOrders = todayOrders.reduce((acc, order) => {
            const { resId, price } = order;
            if (!acc[resId]) {
                acc[resId] = { orders: [], totalOrders: 0, totalPrice: 0 };
            }
            acc[resId].orders.push(order);
            acc[resId].totalOrders += 1;
            acc[resId].totalPrice += price;
            return acc;
        }, {});

        res.status(200).json({
            success: true,
            data: restaurantOrders
        });
    } catch (error) {
        console.log("Error fetching restaurant orders:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching restaurant orders."
        });
    }
};



const getLastTenDaysOrders = async (req, res) => {
  try {
      const endDate = new Date();
      endDate.setHours(23, 59, 59, 999);

      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 10);
      startDate.setHours(0, 0, 0, 0);

      console.log("Start Date:", startDate.toISOString()); // Log start date in ISO format
      console.log("End Date:", endDate.toISOString()); // Log end date in ISO format

      // Query orders within the last 10 days using dateOrdered if createdAt is not present
      const lastTenDaysOrders = await Order.find({ dateOrdered: { $gte: startDate, $lte: endDate } });
      console.log("Orders Found:", JSON.stringify(lastTenDaysOrders.reverse(), null, 2)); // Log the orders found

      if (!lastTenDaysOrders || lastTenDaysOrders.length === 0) {
          console.log("No orders found in the last 10 days."); // Log if no orders found
          res.status(404).json({
              success: false,
              message: "No orders found in the last 10 days."
          });
          return;
      }

      const restaurantOrders = lastTenDaysOrders.reduce((acc, order) => {
          const { resId, totalPrice } = order;
          if (!acc[resId]) {
              acc[resId] = { orders: [], totalOrders: 0, totalPrice: 0 };
          }
          acc[resId].orders.push(order);
          acc[resId].totalOrders += 1;
          acc[resId].totalPrice += totalPrice;
          return acc;
      }, {});

      // Calculate overall totals
      const totalOrders = lastTenDaysOrders.length;
      const totalPrice = lastTenDaysOrders.reduce((sum, order) => sum + order.totalPrice, 0);

      console.log("Restaurant Orders:", JSON.stringify(restaurantOrders, null, 2)); // Log the grouped orders

      res.status(200).json({
          success: true,
          data: {
              restaurantOrders,
              totalOrders,
              totalPrice
          }
      });
  } catch (error) {
      console.log("Error fetching last 10 days restaurant orders:", error);
      res.status(500).json({
          success: false,
          message: "An error occurred while fetching last 10 days restaurant orders."
      });
  }
};
const getPositiveComments = async (req, res) => {
    try {
      const positiveCommentsInRes = await resComments_model.aggregate([
        {
          $match: {
            "commentSentmint.0": "positive"
          }
        }
      ]);
    //   const positiveCommentsInMeal = await mealComments.aggregate([ // This line is problematic
    //     {
    //       ResID: id, // This is not a valid aggregation operator
    //       $match: {
    //         "commentSentmint.0": "positive"
    //       }
    //     }
    //   ]);
  
      res.status(200).json({
        dataOfcomments: positiveCommentsInRes,
        lengthOfcomments: positiveCommentsInRes.length
      });
    } catch (error) {
      console.log("Error fetching positive comments:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching positive comments."
      });
    }
  };

  const getNegativeComments = async (req, res) => {
    try {
      const NegativeCommentsInRes = await resComments_model.aggregate([
        {
          $match: {
            "commentSentmint.0": "negative." 
          }
        }
      ]);
    //   const NegativeCommentsInMeal = await mealComments.aggregate([
    //       {
    //         ResID:id,
    //         $match: {
    //           "commentSentmint.0": "negative." 
    //         }
    //       }
    //     ]);
  
      res.status(200).json({
      //   success: true,
      //   message: "Positive comments retrieved successfully.",
        dataOfcomments: NegativeCommentsInRes,
        lengthOfcomments: NegativeCommentsInRes.length
        //+NegativeCommentsInMeal
      });
    } catch (error) {
      // Handle errors
      console.log("Error fetching positive comments:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching positive comments."
      });
    }
  };

  const getNeutralComments = async (req, res) => {
    try {
      const NeutralCommentsInRes = await resComments_model.aggregate([
        {
          $match: {
            "commentSentmint.0": "neutral" 
          }
        }
      ]);
    //   const NeutralCommentsInMeal = await mealComments.aggregate([
    //       {
    //         $match: {
    //           "commentSentmint.0": "neutral" 
    //         }
    //       }
    //     ]);
  
      res.status(200).json({
      //   success: true,
      //   message: "Positive comments retrieved successfully.",
        dataOfcomments: NeutralCommentsInRes,
        lengthOfcomments: NeutralCommentsInRes.length
        //+NeutralCommentsInMeal
      });
    } catch (error) {
      // Handle errors
      console.log("Error fetching positive comments:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching positive comments."
      });
    }
  };

  const getAllOwner = async (req, res) => {
    try {
      const AllOwner =await userModel.find({})
      const haveresId=AllOwner.filter(owner=>owner.resId)
      // const AllOwner = await userModel.aggregate([
      //   {
      //     $match: {
      //       "role": "owner" 
      //     }
      //   }
      // ]);
    //   const NeutralCommentsInMeal = await mealComments.aggregate([
    //       {
    //         $match: {
    //           "commentSentmint.0": "neutral" 
    //         }
    //       }
    //     ]);
  
      res.status(200).json({
      //   success: true,
      //   message: "Positive comments retrieved successfully.",
        owners: haveresId,
        lengthOfowners: haveresId.length
        //+NeutralCommentsInMeal
      });
    } catch (error) {
      // Handle errors
      console.log("Error fetching positive comments:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching positive comments."
      });
    }
  };
module.exports = { allRestaurantOrders, getPositiveComments, getNegativeComments, getNeutralComments, getAllOwner, getLastTenDaysOrders};

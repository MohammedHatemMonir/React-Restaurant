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
module.exports = { allRestaurantOrders, getPositiveComments, getNegativeComments, getNeutralComments, getAllOwner};

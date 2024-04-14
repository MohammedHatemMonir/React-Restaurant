const resComments_model = require("../../database/models/resComments_model.js");
const mealComments=require('../../database/models/Comments_model.js')

const getPositiveComments = async (req, res) => {
    try {
      const { id } = req.params;
      const positiveCommentsInRes = await resComments_model.aggregate([
        {
          $match: {
            ResID: id,
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
      const {id}=req.params
      const NegativeCommentsInRes = await resComments_model.aggregate([
        {
          $match: {
            ResID:id,
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
      const {id}=req.params
      const NeutralCommentsInRes = await resComments_model.aggregate([
        {
          $match: {
            ResID:id,
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

  const getUserWriteComments = async (req, res) => {
    try {
        const {id}=req.params
        const UserCommentsInRes = await resComments_model.find({ResID:id}).populate('user')
    //   const UserCommentsInRes = await resComments_model.aggregate([
    //     {
    //       $match: {
    //         "user":user
    //       }
    //     }
    //   ]);
    //   const UserCommentsInMeal = await mealComments.aggregate([
    //       {
    //         $match: {
    //             "user":user 
    //         }
    //       }
    //     ]);
  
      res.status(200).json({
      //   success: true,
      //   message: "Positive comments retrieved successfully.",
        dataOfcomments: UserCommentsInRes,
        lengthOfcomments: UserCommentsInRes.length
        //+UserCommentsInMeal
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
module.exports = { getPositiveComments,getNegativeComments,getNeutralComments,getUserWriteComments };

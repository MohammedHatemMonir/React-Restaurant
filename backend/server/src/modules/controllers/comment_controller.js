const meal = require("../../database/models/Meals_model");
const resturant  = require("../../database/models/resturant.Model");
const Comment = require("../../database/models/Comments_model");
const { validationResult } = require("express-validator");
const rescommentSchema = require("../../database/models/resComments_model");
// /////////////////////////////////
const axios = require('axios');
const { json } = require("react-router-dom");

// Replace with your Python server URL
const serverUrl = 'http://127.0.0.1:5000/analyze2';

async function analyzeText(text) {
  try {
    const data = JSON.stringify({ "text": `${text}` });
    const response = await axios.post(serverUrl, data, {headers: {"Content-Type": "application/json"}});
    return response.data;
  } catch (error) {
    console.error("ERROR IN ANALYZE TEXT",error);
    throw error; // Re-throw for proper error handling
  }
}

const analyze = async (req, res) => { //{text:"",mealid: ""}
  try {
        if(!req.session?.user){
          res.status(400).json({ error: "Not Authenticated" });
        }
        const mealid = req.body.mealid;
        const meals = await meal.find({_id:mealid});


        if (!meals[0]) {
            res.send("STOP HACKING!!!");
          }else{

            const text=req.body.text


            // console.log("Python errors",errors)
            //------connecting to python---------
            const result = await analyzeText(text);
            console.log("Result", result)


            // console.log("Python result",result)
            /////////////////////////////////////
            //------saving the comment---------
            const body = {
              Comment:text,
              commentSentmint:result.sentiment[0],
              MealID:req.body.mealid,
              user: req.session?.user?._id
              }
            const CommentS = new Comment(body);
            console.log("Here!")
            await CommentS.save();
            console.log("Here!2")
            /////////////////////////////////////////
            //------updating the meal---------
            const Comment_rating=result.sentiment[0][2]*5
            const new_comment_num=meals[0].comment_num+1

            const new_rating=(Comment_rating+meals[0].rating*meals[0].comment_num)/new_comment_num

            const meal_body = {
              MealName:meals[0].MealName,
              MealImg:meals[0].MealImg,
              Description:meals[0].Description,
              Price:meals[0].Price,
              rating: new_rating,
              ResID:meals[0].ResID ,
              comment_num:new_comment_num
            }
              // console.log (meal_body)
            await meal.updateOne({ _id: mealid },{ $set: meal_body});
            // console.log(meals[0].rating)
            ////////////////////////////////////////
            //------updating the resturants---------

            const resturants = await resturant.find({_id:meals[0].ResID}); //restaurants


            //OPTIMIZED
            const meals2 = await meal.countDocuments({ResID:meals[0].ResID,comment_num: { $gte: 1}}); //Meals that have comments
            // console.log(meals2.length)
            if(new_comment_num>1){
              new_res_rating=(resturants[0].rating*(meals2+resturants[0].comment_num)+new_rating-meals[0].rating)/(meals2+resturants[0].comment_num)
            }else{
              new_res_rating=(resturants[0].rating*(meals2+resturants[0].comment_num-1)+new_rating-meals[0].rating)/(meals2+resturants[0].comment_num)
            }
            const res_body={
              ResName: resturants[0].ResName,
              ResImg: resturants[0].ResImg,
              Categoery: resturants[0].Categoery,
              rating:new_res_rating,
              comment_num:resturants[0].comment_num,
              creation_date:resturants[0].creation_date
          }
          const res_update = await resturant.updateOne({ _id: meals[0].ResID },{ $set: res_body});
            res.status(200).json({Comment:text,commentSentmint:result.sentiment[0],});
            ///////////////////////////////////////
        
    }

  } catch (err) {
    res.status(400).json({ error: err });
    // console.log("meal comment error", err)
  }
};
///////////////////////////////////
const res_comment = async (req, res) => { // {text:"",ResID: "" }
  try {

    // req.session.user._id


    // const errors =validationResult(req)
    // if(!errors.isEmpty()){
    //   res.status(400).json(errors.array())

    // }else{
        if(!req.session?.user){
          res.status(400).json({ error: "Not Authenticated" });
        }

        const ResID = req.body.ResID;
        const userId = req.session.user._id;
        
        const resturants= await resturant.find({_id:ResID});
        if (!resturants[0]) {
            res.send("STOP HACKING!!!");
        }else{
          const text= req.body.text
          // console.log(errors)
          //------connecting to python---------
          const result = await analyzeText(text);
          /////////////////////////////////////
          //------saving the comment---------
          const body = {
            Comment:text,
            commentSentmint:result.sentiment[0],
            ResID:req.body.ResID,
            user: userId
          }
          const CommentS = new rescommentSchema(body);
          await CommentS.save();
          /////////////////////////////////////////
          //------updating the resturants---------
          const Comment_rating=result.sentiment[0][2]*5
          const new_res_comment_num=resturants[0].comment_num+1

          //OPTIMIZED
          const meals2 = await meal.countDocuments({ResID:ResID,comment_num: { $gte: 1}});


          const new_rating=(Comment_rating+(resturants[0].rating*(meals2+resturants[0].comment_num)))/(meals2+new_res_comment_num)
          console.log("NEW RATING",new_rating);


          const res_body={
            ResName: resturants[0].ResName,
            ResImg: resturants[0].ResImg,
            Categoery: resturants[0].Categoery,
            rating:new_rating,
            comment_num:new_res_comment_num,
            creation_date:resturants[0].creation_date
          }
          await resturant.updateOne({ _id: ResID },{ $set: res_body});


          global.io.to(resturants[0].ownerId).emit("new-notification", {message: "Your restaurant has recieved a new Rating.", time: Date.now().toString(), link: "/tutorials" });
          global.io.to(req.session.user._id).emit("new-notification", {message: `You have placed a new rating at ${resturants[0].ResName}`, time: Date.now().toString(), link: "/tutorials" });


          res.status(200).json({Comment:text,commentSentmint:result.sentiment[0],});
          ///////////////////////////////////////
        
    }
  } catch (err) {
    res.status(400).json({ error: err });
    console.log("res comment error", err)
  }
};
module.exports = {
    analyze,
    res_comment,
  };
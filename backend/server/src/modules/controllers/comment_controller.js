const meal = require("../../database/models/Meals_model");
const restaurant  = require("../../database/models/restaurant.Model");
const Comment = require("../../database/models/Comments_model");
const { validationResult } = require("express-validator");

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
    console.error(error);
    throw error; // Re-throw for proper error handling
  }
}

const analyze = async (req, res) => {
  try {
    const errors =validationResult(req)
    if(!errors.isEmpty()){
      res.status(400).json(errors.array())
      
    }else{
        const MealName = req.body.meal;
        const meals = await meal.find({MealName:MealName});
        if (!meals[0]) {        
            res.send("STOP HACKING!!!");
        }else{
      // console.log(errors)
      const text = req.body.text;
      const result = await analyzeText(text);
      const body = {
        Comment:text,
        commentSentmint:result.sentiment,
        MealID:meals[0]._id.toString()}
        const CommentS = new Comment(body);
        await CommentS.save();
      res.status(200).json({Comment:text,commentSentmint:result.sentiment,});
        }
    }

  } catch (err) {
    res.status(400).json({ error: err });
  }
};
///////////////////////////////////
module.exports = {
    analyze,
  };

const { validationResult } = require("express-validator");
const myusers = require("../userModel/userModel");
const DataMember=require('../DataOfMember');

// Get
const getSingleuser = async (req, res) => {
  try {
    const errors =validationResult(req)
    if(!errors.isEmpty()){
      res.status(400).json(errors.array())
    }else{
      // console.log(errors)
      const Email = req.body.Email;
      const password = req.body.password;
      const myuser = await myusers.find({Email:Email});
      // console.log(myuser[0].password)
      if (!myuser[0]) {
        res.status(400).send("user Not Found");
      } else if(myuser[0].password!=password) {
        res.status(400).send("wrong password");
        
      }else{
        console.log(myuser)
        res.status(201).json(myuser[0]);
      }
    }

  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// Post
const addNewuser = async (req, res) => {
  try {
    const errors =validationResult(req)
    if(!errors.isEmpty()){
      res.status(400).json(errors.array())
    }else{
    const username2 = req.body.username;
    const Email = req.body.Email;
    const myuser = await myusers.find({Email:Email});
    if (!myuser[0]) {
      // console.log(req.body)
      req.body.role='USER'
      // console.log(req.body)
      const newuser = new myusers(req.body);
      await newuser.save();
      console.log(newuser)
      res.status(201).json(newuser);
    } else {
      res.send("USER EXEST");
    }
  }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

//????????????????????
// const AddNewMember = async(req,res)=>{
//   try {
//     const id=DataMember.length+1
//     const Name=req.params.name
//     const Job=req.params.job
//     await DataMember.push({id:id,Name:Name,Job:Job})
//     res.json(`Member is Add success ${id}`)
//   } catch (err) {
//     res.status(400).json({ error: err });
//   }
// }
 




// /////////////////////////////////
const axios = require('axios');

// Replace with your Python server URL
const serverUrl = 'http://localhost:5000/analyze';

async function analyzeText(text) {
  try {
    const response = await axios.post(serverUrl, { text });
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
      // console.log(errors)
      const text = req.body.text;
      
      const result = await analyzeText(text);
      res.status(200).json({Sentiment:` ${result.sentiment}`});
    }

  } catch (err) {
    res.status(400).json({ error: err });
  }
};


///////////////////////////////////

module.exports = {
  getSingleuser,
  addNewuser,
  // AddNewMember,
  analyze,
};

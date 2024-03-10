const { validationResult } = require("express-validator");
const myusers = require("../../database/models/userModel");
const bcrypt =require('bcrypt');
const session = require('express-session');
// const generateToken = require("../../utils/GenerateToken.js");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await myusers.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
    if (user) {
      return res.json({success:true, msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await myusers.create({ name, email, password: hashedPassword });
    
    return res.json({success:true, msg: "Signup successful", name:name, email:email});
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ success:false,error: "Internal server error" });
  }
};

const signin = async (req, res) => {
  const { nameOrEmail, password } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log("Name or Email:", nameOrEmail);

    const user = await myusers.findOne({
      $or: [
        { name: { $regex: new RegExp(nameOrEmail, 'i') } },
        { email: { $regex: new RegExp(nameOrEmail, 'i') } }
      ]
    });

    console.log("User found:", user);

    if (!user) {
      return res.json({ msg: "User with this email/username does not exist" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      req.session.user = user;
      console.log("Session User:", req.session.user);
      return res.json({ 
        success: true, 
        id: user._id, 
        role: user.role, 
        name: user.name, 
        email: user.email,
        msg: `Welcome ${user.name}` 
      });
    } else {
      return res.json({ success: false, msg: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



const logout = async (req, res) => {

  
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    // Redirect the user to the home page or wherever you want after logout
    res.json({success:true,msg:"Logged out successfully"});
  });


};

module.exports = {signup,signin,logout};

// Get
// const getSingleuser = async (req, res) => {
//   try {
//     const errors =validationResult(req)
//     if(!errors.isEmpty()){
//       res.status(400).json(errors.array()[0].msg)
//     }else{
//       // console.log(errors)
//       const Email = req.body.Email;
//       const password = req.body.password;
//       const myuser = await myusers.find({Email:Email});
//       // console.log(myuser[0].password)
//       if (!myuser[0]) {
//         res.status(201).send("user Not Found");
//       } else if(myuser[0].password!==password) {
//         res.status(201).send("wrong password");
        
//       }else{
//         console.log(myuser)
//         res.status(201).json({role:myuser[0].role,username:myuser[0].username});
//       }
//     }

//   } catch (err) {
//     res.status(400).json({ error: err });
//   }
// };

// // Post
// const addNewuser = async (req, res) => {
//   try {
//     const errors =validationResult(req)
//     if(!errors.isEmpty()){
//       res.status(400).json(errors.array()[0].msg)
//     }else{
//     const Email = req.body.Email;
//     const myuser = await myusers.find({Email:Email});
//     if (!myuser[0]) {
//       // console.log(req.body)
//       req.body.role='USER'
//       // console.log(req.body)
//       const newuser = new myusers(req.body);
//       await newuser.save();
//       console.log(newuser)
//       res.status(201).json({role:newuser.role,username:newuser.username});
//     } else {
//       res.send("USER EXEST");
//     }
//   }
//   } catch (err) {
//     res.status(400).json({ error: err });
//   }
// };
// module.exports = {
//   getSingleuser,
//   addNewuser,
// };

const { validationResult } = require("express-validator");
const myusers = require("../../database/models/userModel");
// const myusers = new User();
const bcrypt = require("bcrypt");
const passport = require("passport");
const uploadImg = require("../../utils/uploadImg.js");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
// const { io } = require("../../Server.js");
// const generateToken = require("../../utils/GenerateToken.js");
const TestNotifs = async (req, res) => {
  try {

    console.log("TestNotifs", io);


    global.io.to("User Or Room ID here").emit("new-notification", { message: "You have recieved a new Rating.", time: Date.now().toString() });
    // return res.json({ success: true, msg: "Notification sent" });
  } catch (error) {

    console.error("Error during TestNotifs:", error);
  }

}


const signup = async (req, res) => {
  const { name, email, password, userImg, phoneNumber, location } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await myusers.findOne({
      email: { $regex: new RegExp(`^${email}$`, "i") },
    });
    if (user) {
      return res.json({ success: false, msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    let UserImage = null;
    if (userImg) {
      UserImage = await uploadImg(userImg);
    }

    const newUser = await myusers.create({
      name,
      email,
      password: hashedPassword,
      userImg: UserImage,
      phoneNumber: phoneNumber,
    });

    return res.json({
      success: true,
      msg: "Signup successful",
      name,
      email,
      userImg: newUser.userImg,
      phoneNumber,
      location
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};

const signin = async (req, res) => {
  //{email:"",password:""}
  const { email, password } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await myusers.findOne({
      email: { $regex: new RegExp(`^${email}$`, "i") },
    });
    if (!user) {
      return res.json({ msg: "User with this email does not exist" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // let token=generateToken({name:user.name,role:user.role,userId:user._id})
      // return res.json({ msg: `Welcome ${user.name}`, role: user.role, token });

      req.session.user = user;
      req.session.save(err => {
        if (err) {
          // handle error
          console.log(err);
        } else {
          // session saved
          console.log('Session saved successfully.');
        }
      });
      console.log("Seission User!", req.session.user);
      return res.json({
        success: true,
        id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        userImg: user.userImg,
        msg: `Welcome ${user.name}`,
        loggedIn: true,
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
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      }
      // Redirect the user to the home page or wherever you want after logout
      res.json({ success: true, msg: "Logged out successfully" });
    });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

const google = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      }
      // Redirect the user to the home page or wherever you want after logout
      res.json({ success: true, msg: "Logged out successfully" });
    });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

const session = async (req, res) => {
  try {
    if (req.session.user) {
      const user = req.session.user;
      // console.log("Seission Requested",req.session.user);
      return res.json({
        success: true,
        id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        userImg: user.userImg,
        msg: `Welcome ${user.name}`,
        google: req.session.google,
        loggedIn: true,
      });
    } else {
      res.json({ loggedIn: false });
    }
  } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const YOUR_GOOGLE_CLIENT_ID =
  "614280533363-92i70mp5io63o35tlp56apahkvbmnv32.apps.googleusercontent.com";
const YOUR_GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: YOUR_GOOGLE_CLIENT_ID,
      clientSecret: YOUR_GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5001/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      // Find or create a user in your database here
      // For now, we'll just return the profile
      try {
        console.log("Google trying to find user");

        let user = await myusers.findOne({ email: profile.emails[0].value });
        console.log("Found User:", user);
        if (!user?._id) {
          user = await myusers.create({
            name: profile.name.givenName,
            email: profile.emails[0].value,

          });
          console.log("Created Google User");
        }

        console.log("Google User", user);

        return cb(null, user);
      } catch (error) {
        console.error("Error during google signin:", error);
      }
    }
  )
);

const terminateSession = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      }
      // Redirect the user to the home page or wherever you want after logout
      res.json({ success: true, msg: "Logged out successfully" });
    });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    console.log("This the email", email);
    const user = await myusers.findOne({ email });
    if (!user) {
      return res.json({ msg: "Email not found" });
    }
    const token = jwt.sign({ id: user._id }, "jwt_secret_key", {
      expiresIn: "1d",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dine.me155@gmail.com",
        pass: "zcna yjlh kwhi cdbr",
      },
    });

    const resetLink = `http://localhost:3000/reset/${user._id}/${token}`;
    const mailOptions = {
      from: "dine.me155@gmail.com",
      to: user.email,
      subject: "Reset your Password",
      text: `Click the following link to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error:", error);
        return res.json({ msg: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.json({ msg: "Email Send Successfully" });
      }
    });
  } catch (error) {
    console.error("Error during password reset request:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { userId, token } = req.params;
    const { password } = req.body;



    jwt.verify(token, "jwt_secret_key", async (err, decoded) => {
      if (err) {
        return res.status(400).json({ msg: "Invalid or expired token" });
      }
      const user = await myusers.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      const hashedPassword = await bcrypt.hash(password, 8);
      user.password = hashedPassword;
      await user.save();
      return res.json({ msg: "Password Reseated Successfully" });
    });
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const editProfile = async (req, res) => {
  try {
    const userId = req.session?.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "Not authenticated!" });
    }

    const user = await myusers.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, email, password, oldPass, location, phoneNumber, userImg } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;


    if (password.length > 5 && oldPass) {
      try {
        const compare = await bcrypt.compare(oldPass, user.password);
        if (compare) {
          const hashedPassword = await bcrypt.hash(password, 8);
          user.password = hashedPassword;
          await user.save();
          return res.status(200).json({ success: true, message: 'Password updated successfully.' });
        } else {
          return res.status(404).json({ success: false, message: 'Old password is incorrect.' });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'An error occurred while updating the password.', error: error.message });
      }
    } else {
      return res.status(404).json({ success: false, message: 'New password must be longer than 5 characters and old password must be provided.' });
    }
    

    if (location) user.location = location;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (userImg) {
      const updatedUserImg = await uploadImg(userImg);
      user.userImg = updatedUserImg;
    }

    await user.save();
    req.session.user = user;
    return res.json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  signup,
  signin,
  logout,
  session,
  terminateSession,
  google,
  forgetPassword,
  resetPassword,
  editProfile,
  TestNotifs
};

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

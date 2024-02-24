const express=require('express')
const cors=require('cors');
const app=express();
const {connectToMongoDB} = require("./database/dbconnection")
const userRouter = require("./modules/routes/userRoutes");
const pyRoutes = require("./modules/routes/pyRoutes");
const router = require('./modules/routes/resturant.router')
// const { json } = require('react-router-dom');

connectToMongoDB()




app.use(express.json());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from your frontend
//     res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Allow relevant HTTP methods
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow necessary headers
//     next();
//   });
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: true
  }));
app.use(router)
app.use("/analyze", pyRoutes);
app.use("/api/users", userRouter);



app.listen(5001,()=>{
    console.log("Server Running in 5001")
})



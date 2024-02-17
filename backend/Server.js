const express=require('express')
const cors=require('cors');
const app=express();
const DataMember=require('./DataOfMember');
const mongoose = require("mongoose");
const userRouter = require("./Routes/userRoutes");
const pyRoutes = require("./Routes/pyRoutes");
const NewMemberRoutes = require("./Routes/NewMemberRoutes");
// const { json } = require('react-router-dom');

///////////////////////////////////////////////////
// DONT DELETE
// const {py_processm} = require("./reviewtosentiment/sendtopy");
// const data="hi how are  you"
// py_processm(data)


const url = "mongodb+srv://mahmoud:graduationproject@graduationproject.depfjap.mongodb.net/graduationproject";
try {
    mongoose.connect(url).then(() => {
        console.log("MongoDB Server Connected");
    });
}catch{ console.log("error database connection")}


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
app.use("/analyze", pyRoutes);
app.use("/api/users", userRouter);



// ???????????????
// app.use('/AddNewMember',NewMemberRoutes);

///////////////////////////////////////////////////
// DONT DELETE
// app.post('/AddNewMember/:name/:job',(req,res)=>{
//     const id=DataMember.length+1
//     const Name=req.params.name
//     const Job=req.params.job
//     DataMember.push({id:id,Name:Name,Job:Job})
//     res.json(`Member is Add success ${id}`)
// })

app.get('/DataPage',(req,res)=>{
    res.json(DataMember)
})

app.get('/Mainpage',(req,res)=>{
        res.send({text: "welcome"})
})

app.get('/TestS',(req,res)=>{
    res.send({text: "welcome"})
})


app.get('/getcards',(req,res)=>{
    
    res.send(
    [
        {name: "Dominos Pizza",
            rating: "4",
        },
        {
            name: "Koshary",
            rating: "3",
        }
    ])
})

app.listen(5001,()=>{
    console.log("Server Running")
})



const express=require('express');
const cors=require('cors');
const app=express();
const session = require('express-session');
const {connectToMongoDB} = require("./database/dbconnection");
const crypto = require('crypto');
const userRouter = require("./modules/routes/userRoutes");
const comment_routes = require("./modules/routes/comment_routes");
const router = require('./modules/routes/resturant.router');
const MEALrouter = require('./modules/routes/meals_routes');
const passport = require('passport');
const uploadImg = require('./utils/uploadImg');
const { error, Console } = require('console');
const SearchRouter = require('./modules/routes/searchRoutes.js');
const routerTypeComments = require('./modules/routes/dashboard/dashboardRoutes.js');
const {Server} = require('socket.io');
const server = require("http").createServer(app);
const { GoogleGenerativeAI } = require("@google/generative-ai");
const ChatRouter = require('./modules/Chat/chatRouter.js');

// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const wrap = (expressMiddleWare) => (socket, next) => expressMiddleWare(socket.request, {}, next);


const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:5001'],
  credentials: true,
  preflightContinue: true
};
const io = new Server(server,{
  cors: corsOptions
});

// Generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex'); // Generate a 32-byte random string and convert it to hexadecimal format
};

// Example usage
const secretKey = generateSecretKey();
console.log('Secret Key:', secretKey);

app.use(express.urlencoded({ limit: '50mb', extended: true}));

const sessionMiddleware =  session({
  secret: secretKey,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 5 * 60 * 60 * 1000 }, //5 hours
})


app.use(sessionMiddleware);

//const sharedsession = require("express-socket.io-session");

app.use(passport.initialize());
app.use(passport.session());

connectToMongoDB();

app.use(express.json({limit: '50mb'}));

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


app.use(ChatRouter)
app.use(router)
app.use(MEALrouter)
app.use("/analyze", comment_routes);
app.use("/api/users", userRouter);
app.use(SearchRouter)
app.use('/dashboard',routerTypeComments)
io.use(wrap(sessionMiddleware)); 




// let clients = {};

io.on('connection', (socket) => {

  if (!socket.request.session.user) {
    console.log('User not authenticated.');
    socket.disconnect();
    return;
  }
  socket.join(socket.request.session.user._id); //Join a room with your user ID

  socket.on('send-notification', (data) => {
    console.log('Socket message: ' + data.SendToId + ' ' + data.message);
    io.to(data.SendToId).emit("new-notification", data);
  }
  );


  socket.on('disconnect', () => {
    console.log('user disconnected');
    // delete clients[socket.request.session.user._id];
  }
  );
});


//Mohammed hatem image upload here  .then((url) => res.send(url)).catch((err) => res.status(500).send(err))


app.post('/uploadImage', async (req, res) => {
  try{

    const uploadedimgUrl = await uploadImg(req.body.image);
    console.log("uploadedimg",uploadedimgUrl);
  }catch(err){
    console.log("error in upload image",err);
  }
});

//////////////////////////////////////////////////////






passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});





app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { session: true, failureRedirect: '/login'}),
  (req, res) => {
    try {
    // Redirect back to the React.js application with the authentication token {name:req.user.name.givenName, email:req.user.emails[0].value, role:"user", id:req.user.id, loggedIn:true};
    req.session.user = req.user;
    req.session.save(err => {
      if(err) {
        // handle error
        console.log(err);
      } else {
        // session saved
        console.log('Session saved successfully.');
      }
    });

    console.log("req user",req.user) // Use req.
    console.log("req session",req.session.user)
    res.redirect('http://localhost:3000/');
    } catch (error) {
      console.error("Error during auth/google/callback:", error);
    }
  }
);



//
//GEMINI 
/////////////////////////////////////////////////////////////////////
let conversationHistory = [];
const genAI = new GoogleGenerativeAI("AIzaSyC1XeZ_QO13eJuqaHDhJ5O2BZH4_IJXP6g");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });


const history =[
  {
    role: "user",
    parts: [{ text: "System prompt: You are a pirate, You should always reply using a pirate accent, under no circumstances should you break character. If the user said 'I love tacos' You should response and only respond with 'Ok'."}],
  },
  {
    role: "user",
    parts: [{ text: "System prompt: If and only if the user said 'I love tacos' You should respond and only respond with 'Ok'."}],
  },
  {
    role: "model",
    parts: [{ text: "Understood."}],
  },
]
const chat = model.startChat({
  prompt: "If you see this message, say '[AI]' before every response",
  history: history,
  generationConfig: {
    temperature: 0.2,
    maxOutputTokens: 100,
  }
});

async function askAI(message) {

  //history.push({ parts: [{ role: "user", text: message}]});

  const result = await chat.sendMessage(message);
  const response = await result.response;
  const aiText = await response.text();
  console.log("AI response:", aiText);

}
askAI("I love tacos");


////////////////////////////////////////////




// io.listen(4000, () => {
//   console.log('Socket.io listening on port 4000');
// });


global.io = io;
server.listen(5001,()=>{
    console.log("Server Running in 5001")
})

//await sendMessage("How are you doing?");

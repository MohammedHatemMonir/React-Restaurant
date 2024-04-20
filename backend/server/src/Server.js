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
const { error } = require('console');
const SearchRouter = require('./modules/routes/searchRoutes.js');
const routerTypeComments = require('./modules/routes/dashboard/dashboardRoutes.js');

// const GoogleStrategy = require('passport-google-oauth20').Strategy;



// Generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex'); // Generate a 32-byte random string and convert it to hexadecimal format
};

// Example usage
const secretKey = generateSecretKey();
console.log('Secret Key:', secretKey);

app.use(express.urlencoded({ limit: '50mb', extended: true}));


app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5 * 60 * 60 * 1000 }, //5 hours
  })
);
app.use(passport.initialize());
app.use(passport.session());

connectToMongoDB();

app.use(express.json({limit: '50mb'}));

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:5001'],
  credentials: true,
  preflightContinue: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));



app.use(router)
app.use(MEALrouter)
app.use("/analyze", comment_routes);
app.use("/api/users", userRouter);
app.use(SearchRouter)
app.use('/dashboard',routerTypeComments)







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
    console.log("req user",req.user) // Use req.
    console.log("req session",req.session.user)
        res.redirect('http://localhost:3000/');
    } catch (error) {
      console.error("Error during auth/google/callback:", error);
    }
  }
);




app.listen(5001,()=>{
    console.log("Server Running in 5001")
})



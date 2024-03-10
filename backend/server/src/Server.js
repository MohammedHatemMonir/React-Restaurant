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

const YOUR_GOOGLE_CLIENT_ID = "614280533363-92i70mp5io63o35tlp56apahkvbmnv32.apps.googleusercontent.com";
const YOUR_GOOGLE_CLIENT_SECRET = "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";
// Generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex'); // Generate a 32-byte random string and convert it to hexadecimal format
};

// Example usage
const secretKey = generateSecretKey();
console.log('Secret Key:', secretKey);

app.use(express.urlencoded({ extended: true }));


app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5 * 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

connectToMongoDB();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: true
  }));
app.use(router)
app.use(MEALrouter)
app.use("/analyze", comment_routes);
app.use("/api/users", userRouter);




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
    // Redirect back to the React.js application with the authentication token
    res.redirect('http://localhost:3000/');
  }
);




app.listen(5001,()=>{
    console.log("Server Running in 5001")
})



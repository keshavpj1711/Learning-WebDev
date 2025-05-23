import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import session from "express-session";  // going to allow us to save sessions of a user
import passport from "passport";
import { Strategy } from 'passport-local';

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Since it's a middleware we use it like this
// This is required for managing our sessions
app.use(
  session({
    secret: "SomeSecretShii",  // 
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    }
  })
)

// Using passport and note this can only be done after initializing it
app.use(passport.initialize());
app.use(passport.session());


const db = new pg.Client({
  user: "nightfury",
  host: "localhost",
  database: "authLvls",
  password: process.env.USER_PWD,
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets", (req, res) => {

  // This isAuth() is set to true from the verify function inside the passport.use(new Strategy())
  if (req.isAuthenticated()) {  // This is provided by passport so you can check if the user is logged in or not
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
})

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hash]
          );
          res.redirect("/secrets");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", passport.authenticate('local', {
  successRedirect: "/secrets",  // Redirects to /secrets if login successful
  failureRedirect: "/login",  // If auth fails redirecting back to /login
}));

// One more thing about using strategy is if the name of the input tags are same as 
// parameters of the function verify it'll automatically get the things 
// in our case it'll automatically get username and password
passport.use(new Strategy(async function verify(username, password, cb) {
  console.log(username)

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return cb(err);
        } else {
          if (result) {
            // So once the user is identified we will make a call back that is 
            return cb(null, user);
          } else {
            return cb(null, false);  // This sets isAuth() to false
          }
        }
      });
    } else {
      return cb("User not found");  // Returning the err in callback fn
    }
  } catch (err) {
    return cb(err);
  }
}));

// Used to 
passport.serializeUser((user, cb) => {
  cb(null, user);
})

// Used to 
passport.deserializeUser((user, cb) => {
  cb(null, user);
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

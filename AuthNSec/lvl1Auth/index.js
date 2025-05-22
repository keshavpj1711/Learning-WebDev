import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";
import { render } from "ejs";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'nightfury',
  host: 'localhost',
  database: 'authLvls',
  password: process.env.USER_PWD,
  port: 5432,
});

try {
  await db.connect();
  console.log('Connected to PostgreSQL');
} catch (err) {
  console.error('Connection error', err.stack);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  // Checking if the user exists
  const result = await db.query("SELECT * FROM  users WHERE email=$1", 
    [req.body.username]
  )

  if (result.rows.length !== 0) {
    // implies user exists
    console.log("Error user already exists. Please Login!")
    res.redirect("/register")
  } else {
    // Registering user in our system
    const response = await db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING email;", 
      [req.body.username, req.body.password]
    );
    console.log("User registered: ", response.rows[0]);
    res.render("secrets.ejs");
  }
});

app.post("/login", async (req, res) => {
  // Checking if user exists
  const result = await db.query("SELECT * FROM  users WHERE email=$1 and password=$2", 
    [req.body.username, req.body.password]
  )

  if (result.rows.length === 0) {
    // implies user exists
    console.log("Incorrect Username or Password")
    res.redirect("/login")
  } else {
    res.render("secrets.ejs");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "nightfury",
  host: "localhost",
  database: "famTravTracker",
  password: process.env.USER_PWD,
  port: 5432,
});

try {
  db.connect();
  console.log("Connected to Postgres server")
} catch (error) {
  console.log("Error connecting to Database")
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;
let countries = [];

let users = [
  // demo data this is updated once the function is called
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];


async function getUsers() {
  const result = await db.query("SELECT * FROM users")
  if (result.rows.length === 0) {
    throw new error("Create a user") //
  } else {
    users = result.rows;
  }
}

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1", [currentUserId]);
  countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
}
app.get("/", async (req, res) => {
  await checkVisisted();
  await getUsers();

  console.log("Available Users: ", users)
  console.log("Current User: ", currentUserId);
  const userColor = users.find(entry => entry.id === currentUserId).color;
  console.log("Color Selected: ", userColor);
  console.log("Countries Visited: ", countries)
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: userColor,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log("Entered data: ", input);
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    console.log("Country code recieved: ", countryCode)
    try {
      if (countries.includes(countryCode)) {
        console.log("Country already visited")
      } else {
        await db.query(
          "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
          [countryCode, currentUserId]
        );
        console.log("Country added successfully!");
      }
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log("Please enter a valid country!")
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  console.log("Selected: ", req.body.add)
  if (req.body.add === "new") {
    // redirect to the form where add new user possible
    res.render("new.ejs");
  } else {
    // update the currentUser with respect to which user was clicked
    const userSelected = parseInt(req.body.user);
    // console.log("Changing user to: ", userSelected);
    currentUserId = userSelected;

    // now redirecting to "/" with updated details
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html

  // Getting user responses 
  // console.log(req.body)
  const userName = req.body.name;
  const userColor = req.body.color;

  try {
    result = await db.query("INSERT INTO users (name, color) VALUES ($1, $2) RETURNING *",
      [userName, userColor]
    )
    console.log("User Added: ", result)
  } catch (error) {
    console.log("Error adding user!")
  }

  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

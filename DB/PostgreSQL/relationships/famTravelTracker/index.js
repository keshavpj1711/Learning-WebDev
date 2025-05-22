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
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      console.log("Country added successfully!")
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  // update the currentUser with respect to which user was clicked
  const userSelected = parseInt(req.body.user);
  console.log("Changing user to: ", userSelected);
  currentUserId = userSelected;

  // now redirecting to "/" with updated details
  res.redirect("/");
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

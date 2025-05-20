import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: 'nightfury',
  host: 'localhost',
  database: 'flags_db',
  password: process.env.USER_PWD,
  port: 5432,
});

try {
  await db.connect();
  console.log('Connected to PostgreSQL');
} catch (err) {
  console.error('Connection error', err.stack);
}

// // Your queries go here
async function getVisitedCountries() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getCountryCode(countryName) {
  const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [countryName]);

  let countryCode = result.rows[0].country_code;
  console.log(countryCode);
  return countryCode;
}

async function insertVisitedCountry(countryCode) {
  try {
    const result = db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",
      [countryCode]
    )
    console.log("Country Added successfully");
  } catch (error) {
    console.log("Error inserting record: ", error);
  }
}


app.get("/", async (req, res) => {
  const visitedCountries = await getVisitedCountries();

  // console.log("Visited countries list: ", visitedCountries)

  res.render("index.ejs", {
    total: visitedCountries.length,
    countries: visitedCountries
  })
});

app.post("/add", async (req, res) => {
  // fetch the country code for the entered country
  try {
    const countryCode = await getCountryCode(req.body.country);
    console.log("CountryCode: ", countryCode);
    // insert the country code
    insertVisitedCountry(countryCode);
  } catch (error) {
    console.log("Error fetching country code, Please check the spelling of the inserted country")
  }

  // rendering index.ejs again
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

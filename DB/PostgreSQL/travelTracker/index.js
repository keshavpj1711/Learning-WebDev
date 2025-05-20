import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = 3000;

let visitedCountries = [];

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

  if (result.rows.length === 0) {
    throw new Error("Country not found");  // Throw an error instead of returning a string
    // this error can be caught by the try and catch block
  }
  
  return result.rows[0].country_code;
}

async function insertVisitedCountry(countryCode) {
  try {
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
    console.log("Country Added successfully");
    return true;  // Return true on success
  } catch (error) {
    console.log("Error inserting record: ", error);
    throw error;  // Re-throw the error to be caught by the caller
  }
}


app.get("/", async (req, res) => {
  visitedCountries = await getVisitedCountries();

  // console.log("Visited countries list: ", visitedCountries)

  res.render("index.ejs", {
    total: visitedCountries.length,
    countries: visitedCountries
  })
});

app.post("/add", async (req, res) => {
  try {
    // First, update visitedCountries to have the latest data
    visitedCountries = await getVisitedCountries();
    
    // Get the country name from the form
    const countryName = req.body.country;
    
    // Try to get the country code
    const countryCode = await getCountryCode(countryName);
    
    // Check if country is already visited
    if (visitedCountries.includes(countryCode)) {
      return res.render("index.ejs", {
        total: visitedCountries.length,
        countries: visitedCountries,
        error: "Country already visited"
      });
    }
    
    // Add the country to visited list
    await insertVisitedCountry(countryCode);
    
    // Refresh the visited countries list
    visitedCountries = await getVisitedCountries();
    
    // Redirect to home page to see updated map
    return res.redirect("/");
    
  } catch (error) {
    console.log("Error:", error.message);
    
    // Determine the type of error
    let errorMessage = "An unexpected error occurred";
    
    if (error.message === "Country not found") {
      errorMessage = "Enter a valid country";
    } else if (error.message.includes("duplicate key") || error.message.includes("unique constraint")) {
      errorMessage = "Country already visited";
    }
    
    // Render the page with the error
    return res.render("index.ejs", {
      total: visitedCountries.length,
      countries: visitedCountries,
      error: errorMessage
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

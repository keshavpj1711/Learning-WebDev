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

// Your queries go here

// Query for getting the country codes and passing visited Countries as a list
db.query("SELECT country_code FROM visited_countries", (err, res) => {
  if(err){
    console.log("Error in fetching query results: ", err.stack)
  } else {
    const visitedCountryData = res.rows
    // console.log("Data fetched from db: ",visitedCountryData)
    for (let i = 0; i < visitedCountryData.length; i++) {
      visitedCountries.push(visitedCountryData[i].country_code);
    }
    console.log("Visited countries list: ", visitedCountries)
  }
  db.end()
})


app.get("/", async (req, res) => {
  //Write your code here.
  res.render("index.ejs", {
    total: visitedCountries.length,
    countries: visitedCountries
  })
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

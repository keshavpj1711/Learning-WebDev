import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = 3000;

// Test data
let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];

// Importing data from capitals table from flags_db in your postgresql server
const db = new pg.Client({
  user: 'nightfury',
  host: 'localhost',
  database: 'flags_db',
  password: process.env.USER_PWD,
  port: 5432,
});

// Checking connection
try {
  await db.connect();
  console.log('Connected to flags_db');
} catch (err) {
  console.error('Connection error', err.stack);
}

// Queries
db.query("SELECT * FROM capitals", (err, res) => {
  if(err){
    console.log("Error executing query", err.stack);
  } else{
    quiz = res.rows;
    // console.log(quiz[5]);
  }
  db.end();
})

// Don't forget to close the connection when done:


let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();  // Waiting for next question
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

// Setting up quiz
let quiz = {};

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
db.query("SELECT * FROM flags", (err, res) => {
  if(err){
    console.log("Error fetching records: ", err.stack);
  } else{
    quiz = res.rows;
  }
  // Closing the Connection
  db.end();
})

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
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

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
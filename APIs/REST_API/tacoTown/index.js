import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';

const app = express();
const port = 3000;

fs.readFile("./recipe.json", 'utf-8', (err, data) => {
  if (err) throw err;
  recipeData = JSON.parse(data);
})

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

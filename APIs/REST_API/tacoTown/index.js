import express from "express";
import bodyParser from "body-parser";
import { readFile, writeFile } from "fs/promises";
import morgan from "morgan";

const app = express();
const port = 3000;

const data = await readFile("recipe.json", "utf8")
const recipeJSON = JSON.parse(data);
const choicList = {
  chicken: '0001',
  beef: '0002',
  fish: '0003'
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  const choice = req.body.choice;
  const choiceId = choicList[choice];
  const reqRecipe = recipeJSON.find(recipe => recipe.id === choiceId);
  // console.log(reqRecipe);

  res.render("index.ejs", {reqRecipe})
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

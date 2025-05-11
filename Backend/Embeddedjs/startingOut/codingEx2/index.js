import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  var fName = req.body.fname + req.body.lname;
  res.render(__dirname + "/views/index.ejs", {fullName: fName})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
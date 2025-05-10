import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "Yet to be generated"

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res, next) => {
  console.log(req.body)
  try {
    bandName = req.body["street"] + req.body["pet"];
  } catch (error) {
    console.log("Enter some value and press submit")
  }
  res.send(`<h1>Your BandName is</h1>\n<h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const password = "someTHING";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body.password);
  if (req.body.password == password) {
    console.log("Opening secrets wait!!");
    res.sendFile(__dirname + "/public/secrets.html");
  } else {
    console.log("Redirecting")
    res.redirect("/")
    // res.sendFile(__dirname + "/public/index.html")
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
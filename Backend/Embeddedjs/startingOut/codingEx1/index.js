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
  const data = {
    title: "EJS Tags", 
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: 
    "<em>This is some em text</em>",
  }
  res.render(__dirname + "/views/index.ejs", data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
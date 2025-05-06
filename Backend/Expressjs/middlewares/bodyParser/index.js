import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Setting up directory path in order for node to access the file we want to send
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// app.use() mounts the specified middleware function or functions at specified path
app.use(bodyParser.urlencoded({extended: true}));
// This should be called before any route handlers

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  // Without using the body parser we won't be able to access the req.body
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
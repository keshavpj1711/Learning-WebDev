import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => { 
  // request and response is what we are getting
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server started successfully at ${port}`);
})
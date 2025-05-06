import express from "express";
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>");
})

app.post("/register", (req, res) => {
  res.sendStatus(201);
})

app.put('/user/keshav', (req, res) => {
  res.sendStatus(200);
})

app.patch('/user/keshav', (req, res) => {
  res.sendStatus(200);
})

app.delete('/user/keshav', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
})
import express from "express";

const app = express();
const port = 3000;

// This is bascially how we use custom middleware inside app.use()
// app.use((req, res, next) => {
//     console.log("Request method: ", req.method);
//     next(); 
//     // This next determines when we move from the middlewares to the server handlers
// }); 

// Creating a custom logger middleware
function logger(req, res, next) {
	console.log("Method:", req.method + "|" + "Path Accessed:", req.url);
	next();
}

// Using the custion middleware normally
app.use(logger)

app.get("/", (req, res) => {
	res.send("HomePage");
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
# Middlewares

We use middlewares by passing it as an arguements to app.use();

## What can middlewares do?

They can pre-process the HTTP requests.

## Examples of middlewares

### bodyParser

It helps to reads the body of an incoming HTTP request (like data sent from a form or an API call) and makes it available to you in a convenient way, usually as a JavaScript object.

### morgan

It helps you log details about HTTP requests (like GET, POST, etc.) as they come into your server.
```js
app.use(morgan("dev"));
```
Instead of **"dev"** we can use other parameters like **"short"**, **"tiny"**, which determines the structure morgan logs the HTTP requests.

## Custom middlewares

Here's a piece of code which helps us understand the implementation of custom middlewares.

```javascript
// This is bascially how the basic structure of a custom middleware looks like 
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
```
# Node.js Notes

## Introduction to Node.js
Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript outside the browser, making it suitable for backend development.

### Features:
- Asynchronous and event-driven
- Built-in modules for networking, file system, and more
- Single-threaded but uses non-blocking I/O
- Supports package management via `npm`

## Installing Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/). Verify installation:
```sh
node -v
npm -v
```

## Running JavaScript with Node.js
Create a file `app.js`:
```javascript
console.log("Hello, Node.js!");
```
Run it using:
```sh
node app.js
```

## Node.js REPL (Read-Eval-Print Loop)
Start REPL:
```sh
node
```
Try:
```javascript
> console.log("Hello");
> 2 + 2
> let x = 10; x * 2;
```
Exit REPL:
```sh
.exit
```

## Node.js Modules
Modules in Node.js allow you to structure your application into reusable pieces.

### 1. Built-in (Native) Modules
```javascript
const fs = require("fs");   // File System module
const path = require("path"); // Path module
const os = require("os");   // OS module
const http = require("http"); // HTTP module
```

### 2. Creating Custom Modules
Create `math.js`:
```javascript
function add(a, b) {
    return a + b;
}
module.exports = add;
```
Use it in another file:
```javascript
const add = require("./math");
console.log(add(5, 3));
```

## File System (fs) Module
### Reading a File
```javascript
const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
```
### Writing to a File
```javascript
fs.writeFile("output.txt", "Hello, World!", (err) => {
    if (err) throw err;
    console.log("File written successfully");
});
```

## HTTP Server
```javascript
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
```
Run it and visit `http://localhost:3000`.

## NPM (Node Package Manager)
### Initializing a Project
```sh
npm init -y
```
### Installing Packages
```sh
npm install express
```
### Using Installed Package
```javascript
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello Express!"));
app.listen(3000, () => console.log("Server running"));
```

## Event Emitter
```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (msg) => {
    console.log(`Message received: ${msg}`);
});

emitter.emit("message", "Hello Event!");
```

## Conclusion
This is a basic introduction to Node.js. Next steps:
- Learn Express.js for web applications
- Use MongoDB or PostgreSQL for databases
- Explore authentication and security best practices

Happy coding!

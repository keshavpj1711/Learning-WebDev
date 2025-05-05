# Express.js Beginner Notes
## **What is Express.js?**

- **Express.js** is a minimal and flexible Node.js web application framework.
- It provides a set of features for building web and mobile applications, APIs, and handling HTTP requests and responses easily.
- Express sits on top of Node.js, simplifying tasks like routing, middleware integration, and server setup.



## **Why Use Express.js?**

- **Easy to Learn:** Written in JavaScript, so you can use the same language for both frontend and backend.
- **Fast Development:** Reduces boilerplate code and speeds up server-side development.
- **Flexible:** Unopinionated, so you can structure your app however you like.
- **Middleware Support:** Easily extend functionality with middleware.
- **Large Community:** Lots of resources and third-party packages available.



## **Installing Express.js**

1. **Initialize a Node.js project:**

```bash
npm init -y
```

2. **Install Express:**

```bash
npm install express
```




## **Basic Express.js Application**

Here’s a simple "Hello, World!" example:

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =&gt; {
  res.send('Hello World!');
});

app.listen(port, () =&gt; {
  console.log(`Server ready at http://localhost:${port}`);
});
```

- Save this as `index.js` and run with `node index.js`.



## **Core Concepts**

### **1. Routing**

- Routing determines how your app responds to client requests at specific endpoints (URLs).
- Example:

```js
app.get('/about', (req, res) =&gt; {
  res.send('About Page');
});
```

- Supports all HTTP methods: `GET`, `POST`, `PUT`, `DELETE`, etc.


### **2. Middleware**

- Functions that execute during the request-response cycle.
- Can modify `req` and `res` objects, end the request, or pass control to the next middleware.
- Example:

```js
app.use(express.json()); // Built-in middleware to parse JSON bodies
```


### **3. Request \& Response Objects**

- `req`: Contains info about the HTTP request (params, body, headers, etc.).
- `res`: Used to send a response back to the client.
- Common methods:
    - `res.send()`
    - `res.json()`
    - `res.status()`
    - `res.render()` (for templates)


### **4. Serving Static Files**

- Serve images, CSS, JS, etc.:

```js
app.use(express.static('public'));
```

Place your static files in the `public` directory.


### **5. Template Engines**

- Render dynamic HTML using template engines like Pug, EJS, or Handlebars.
- Example setup:

```js
app.set('view engine', 'pug');
app.set('views', './views');
```

Then use `res.render('template', { data })`.



## **Common Features**

- **URL Parameters \& Query Strings:**
    - Access route parameters: `req.params`
    - Access query strings: `req.query`
- **Error Handling:** Use middleware with four arguments: `(err, req, res, next)`
- **Connecting to Databases:** Easily integrate with MongoDB, MySQL, etc.
- **Session Management:** Implement sessions for user authentication.



## **Project Structure (Recommended)**

```
/project-root
  /public        # Static files
  /views         # Templates
  /routes        # Route handlers
  app.js         # Main app file
  package.json
```

Express does not enforce a structure, but organizing files helps maintainability.

## **Next Steps**

- Learn about advanced routing, middleware, error handling, and integrating databases.
- Explore authentication, validation, and deployment.



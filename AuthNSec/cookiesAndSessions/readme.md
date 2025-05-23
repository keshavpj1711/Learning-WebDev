# Cookies and Sessions 

- **Cookies** are small piece of data that a web server sends to your browser, 
and your browser stores it locally on your computer.

- **Sessions:** A session is a way for the server to remember information about a user across multiple requests. 
  - Since HTTP is stateless (meaning each request is independent and the server doesn't naturally remember previous requests)
    sessions solve this problem by creating a temporary "memory" of the user's interaction.

### What is Passport?
It's an auth middleware for Node.js. 

# How we are doing things in the example.

## Authentication Flow

1. **Registration**
   - User submits email/password
   - Password hashed with bcrypt (10 rounds)
   - User stored in PostgreSQL database

2. **Login**
   - Passport's LocalStrategy validates credentials
   - Session created upon successful authentication
   - Session ID stored in cookie

3. **Protected Routes**
   - `req.isAuthenticated()` checks session validity
   - Unauthenticated users redirected to login

4. **Session Persistence**
   - Browser automatically sends session cookie with each request
   - Passport deserializes user data from session
   - User remains logged in until session expires or logout


## Serialization/Deserialization

### Session Persistence

```js
passport.serializeUser((user, cb) => {
  cb(null, user); // Store entire user object in session
});

passport.deserializeUser((user, cb) => {
  cb(null, user); // Retrieve user object from session
});
```

*Why this matters:*  
- Serialization determines what user data gets stored in the session
- Deserialization recreates user object for subsequent requests


## Code implementation

### Setting up session

```js
// Since it's a middleware we use it like this
// This is required for managing our sessions
app.use(
  session({
    secret: "SomeSecretShii",  // 
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    }
  })
)
```
**What each session option means:**
- `secret`: Used to sign the session ID cookie (should be in environment variables)
- `resave`: Forces session to be saved even when unmodified
- `saveUninitialized`: Forces new sessions to be saved to store
- `maxAge`: Session expiration time in milliseconds


### Setting up passport initialization

```js
app.use(passport.initialize());  // Initializes passport middleware
app.use(passport.session());  // Enables session support for passport
```
> **Order matters!** These must come AFTER the session middleware.

### Passport Local Strategy

- When a user tries to log in, the Local Strategy looks for a username and password in the request (usually from a form).

- It uses a verify function (that you write) to check if the username exists and if the password matches

- If the credentials are correct, the user is authenticated and can access protected routes

```js 
// One more thing about using strategy is if the name of the input tags are same as 
// parameters of the function verify it'll automatically get the things 
// in our case it'll automatically get username and password from the body passed 
passport.use(new Strategy(async function verify(username, password, cb) {
  // This cb is the callback function for this local Strategy
  console.log(username)

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return cb(err);
        } else {
          if (result) {
            // So once the user is identified we will make a call back that is 
            return cb(null, user);
            // null since no error and passing user which set isAuth to true
          } else {
            return cb(null, false);  // This sets isAuth() to false
          }
        }
      });
    } else {
      return cb("User not found");  // Returning the err in callback fn
    }
  } catch (err) {
    return cb(err);
  }
}));
```

### Protected Routes

How we protect routes using the passport middleware.

```js
app.get("/secrets", (req, res) => {
  // This isAuth() is set to true from the verify function inside the passport.use(new Strategy())
  if (req.isAuthenticated()) {  // This is provided by passport so you can check if the user is logged in or not
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
})
```

### Handling the post method for /login route

```js
app.post("/login", passport.authenticate('local', {
  successRedirect: "/secrets",  // Redirects to /secrets if login successful
  failureRedirect: "/login",  // If auth fails redirecting back to /login
}));
```
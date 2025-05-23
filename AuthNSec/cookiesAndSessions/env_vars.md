# Environment Variables

Many a times we use things like **keys** or secret token like the **secret** in session management via express-session.

We have to keep this things seperate from our codes due to security reasons that's when in env vars come into play.

- **What:** Key-value pairs that store settings or secrets outside your code (like passwords, API keys)

- **Why:** Keep sensitive info out of code, make your app easy to configure for different setups (development, production)

- **How:** Access them in Node.js using process.env.VARIABLE_NAME

To make the variables inside our .env file to be accessible we need a module to work it out. 

## Using the `dotenv` module

### Creating `.env` file
```
DB_USER=someUser
DB_PWD=somePassword
SESSION_SECRET=someSecret
```

### Using the variables in our code

```js
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.DB_USER); // "someUser"
```
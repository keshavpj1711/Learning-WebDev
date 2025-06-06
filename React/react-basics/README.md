# React 

## Code Basics:

### Setting up our main.jsx(Connecting to `<div>` with id=root)

```jsx
import { StrictMode } from 'react'  
// sp component that helps to find potential problems in your react app
import { createRoot } from 'react-dom/client'  
// used to connect to your react app to actual html page in browser
// modern way to start react app since react 18
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## react-router-dom

- Popular library for handling routing (navigation between pages) in React web apps

- Let's us show component based pages on the URL without reloading the page in react web app.

### Why is it required?

- React itself doesn't have built in routing.
- Keeps the UI and URL in sync, so users can navigate the app like normal website.

### Imp components

| Component	| What it does |
|----------|----------|
| `<BrowserRouter>`	| Wraps your app to enable routing | 
| `<Routes>`	| Groups all your routes | 
| `<Route>`	| Defines a path and which component to show | 
| `<Link>`	| Used for navigation (instead of `<a>`) | 
| `<Outlet>`	| Where nested routes will render (advanced) | 

### Example of how its implemented

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Routing differences Client v/s Server Side

### Server Side routing(Express.js Routing)

- Handles data, authentication, APIs 

- We write `app.get()` and `app.post()` in our backend/sever files, usually index.js or server.js

- What this basically does is handles HTTP requests from client/browser.
  - Lets us see this using an example:
    ```js
    app.get("/", (req, res) => {
      res.render("index.ejs");
    })
    ```
    This piece of code tell express to render this to HTML and send it to the browser for a HTTP GET request.
  - The **browser receives a fully rendered HTML page from the server**.

### Client Side Routing(using react-router-dom)

- Handles what the user sees and page navigation 

- Basically it handles the navigation between the pages or UI components which are already loaded in the browser.

- What it does is, it lowers server loads by handling HTTP Requests for basic UI components directly on the browser side.
  - Understanding this using a simple example: 
    ```html
    <Route path="/" element="{<Home />}" />
    ```
    The `<Home />` component is already present in your frontend react code
  - **No new HTML is sent from the server**, the brower stays on the same page and React updates the visible content.
  > The browser stays on thesame page means the browser does not reload or fetch a new HTML document from the server.<br>  
  >Instead, React Router updates the visible content by rendering different React components, all within the already-loaded single-page app

- **Why is it useful?**
  - Faster navigation, since we don't have to wait for server to render the html page for us
  - You can do animations and keep app state.


## Imports and Export

- In a single file we can only have a single default export, but that default export can be imported under any name you give it inside another file.

- But if you wanted to get a hold of the other things that are being exported then you can add a comma
and a set of curly braces and then specify the exact names of the functions or constants or whatever
it is that you want to export from the other file.


## React Props

These are ways of passing data from one react component to another.

For example:
```jsx
<ContactCard name="Tom" phone="12353" email="tom@company.com"/>
```

Now in the ContactCard component we can access these properties passed here

```jsx 
function ContactCard(props) {
  return (
    <div className="flex gap-2">
      <div>
        <img src={props.url} alt="" srcset="" className="w-20 h-20"/>
      </div>
      <div>
        <div>Contact Info:{props.phone}</div>
        <div>Email: {props.email}</div>
      </div>
    </div>
  )
}

export default ContactCard;
```
> Got to know about React-Dev-Tools, and it's nice it help you have a component tree for your app.
> It also lets you check which properties are being passed to the components.


## Mapping Data to Components

Ok so when we need to loop through loads and loads of data we can't create components for each one of them.

Enters the .`map()` fn, what this does is it loops through all the elements of the array and also passing them as arguments to a function like in the case below.

Example: 
```jsx
import ContactCard from "./ContactCard";
import contactList from "../contacts";

function createCard(contact) {
  // Since we have to create too many cards we can do this directly 
  // by calling this fn repetedly using the .map() fn
  return (
   <ContactCard 
   key={contact.id}  
   // This key parameter even though is present or used in the ContactCard
   // still it has to be passed in order to avoid error in REACT
   // It's not something we can tap into it, so if i want to use contact.id we have to set it to something else
   // id = {contact.id}
   name={contact.name}
   phone={contact.phoneNo}
   email={contact.email}
   /> 
  )
}

function Contact() {
  return (
    {contactList.map(createCard)}
  )
}
```




---


# JSX and BABEL

## JSX

- Lets you write HTML-like code directly inside your JavaScript files, especially when building React applications
- Makes your UI code more readable 
- Under the hood, JSX is conv into regular JS that react can understand and use to render HTML elements in the page

> This conv to regular JS is done using a JS compiler known as BABEL.

## Babel 

What this basically does is help us save all that time writing difficult pieces of code to generate basic HTML templates that can be added to or inside an element.

Other functionality that it provides is how this can be used as a compiler to convert the new modern js to oldschool js which can be understood by each browser.

How does it really help to convert JSX to old school JS? See below

### See it in action 

![alt text](image.png)


## JS Expressions in JSX

In jsx files we can directly insert JS expressions or variables defined.

For Example: 

```jsx
function App() {
  const name = "Keshav";

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen gap-5'>
        <h1 className='text-6xl'>{name} is learning JSX</h1>
        <h3 className='text-3xl'>Your random number is: {Math.floor(Math.random()*11)}</h3>
      </div>
    </>
  )
}

export default App
```

> One thing to note here is that **only the expressions work** not statements so if you try to insert some if-else block or other pieces of code that'll not work.

### Expressions vs Statements

Video lecture explaining how expressions are different from statements: [Click Here](https://www.youtube.com/watch?v=WVyCrI1cHi8)


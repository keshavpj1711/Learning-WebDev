# React

## Inside this module

### React-basics: [Click Here](./react-basics/README.md)

- Server Side and Client Side Routing and Rendering
  - react-router-dom
- Setting up a basic react app
  - Basics of JSX and Babel
- Basic Str of react app
  - How things are structured in main.jsxan App.jsx
- React components and rendering
  - React props
  - mapping data to components
  - conditional rendering

## **What is React?**

- React is a JavaScript library for building user interfaces (UIs).
- It is used to build single-page applications (SPAs) where the content updates dynamically without reloading the page.
- React allows you to create reusable UI components, making your code organized and efficient.

---

## **Why Use React?**

- Fast and efficient UI updates using a Virtual DOM (a lightweight copy of the actual DOM).
- Component-based architecture: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- Widely adopted by companies like Facebook, Netflix, Instagram, and Airbnb.

---

## **Setting Up React**

- You need Node.js installed on your computer.
- The easiest way to start is with Create React App:

```bash
npm create-react-app my-react-app
```

- This sets up everything you need to start coding in React.

- But what i will be using is 

```bash
npm create vite@latest my-react-app --template react
```

---

## **Core Concepts**

### **1. JSX (JavaScript XML)**

- JSX is a syntax extension for JavaScript that looks similar to HTML.
- It lets you write UI code in a way that’s easy to read and understand.
- Example:

```jsx
const element = <h1>Hello, World!</h1>;
```

- JSX gets compiled to JavaScript behind the scenes.

---

### **2. Components**

- Components are the building blocks of a React application.
- Each component is a piece of UI (like a button, form, or entire page).
- Two types:
    - **Functional Components** (most common now):

```jsx
function MyButton() {
  return <button>Click Me</button>;
}
```

    - **Class Components** (older style, less common now):

```jsx
class MyButton extends React.Component {
  render() {
    return <button>Click Me</button>;
  }
}
```

- Component names must start with a capital letter.

---

### **3. Nesting Components**

- You can use (nest) components inside other components:

```jsx
function App() {
  return (
    <div>
      <h1>My App</h1>
      <MyButton />
    </div>
  );
}
```

- This lets you build complex UIs from simple building blocks.

---

### **4. Props (Properties)**

- Props are used to pass data from a parent component to a child component.
- Props are read-only (cannot be changed by the child).
- Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage:
<Welcome name="Alice" />
```

- Here, `name` is a prop.

---

### **5. State**

- State is a way for components to remember information (like user input, toggles, etc.).
- State can change over time, and when it does, the component re-renders.
- In functional components, use the `useState` hook:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```


---

### **6. Rendering Lists and Conditional Content**

- To render a list:

```jsx
const items = ['Apple', 'Banana', 'Cherry'];
const listItems = items.map(item => <li key={item}>{item}</li>);
return <ul>{listItems}</ul>;
```

- To render content conditionally:

```jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```


---

### **7. Handling Events**

- React handles events like clicks, form submissions, etc., using camelCase syntax:

```jsx
<button onClick={handleClick}>Click Me</button>
```


---

### **8. Styling in React**

- Inline styles:

```jsx
<div style={{ color: 'blue', fontSize: 20 }}>Styled Text</div>
```

- Or use CSS files and className:

```jsx
<div className="my-class">Text</div>
```


---

## **Key Terms to Remember**

| Term | Meaning |
| :-- | :-- |
| Component | Reusable piece of UI logic and design |
| JSX | Syntax to write UI code (looks like HTML) in JavaScript |
| Props | Data passed from parent to child components (read-only) |
| State | Data managed within a component that can change over time |
| Virtual DOM | React’s lightweight copy of the real DOM for fast updates |
| Hook | Special function (like useState) to add features to functional components |

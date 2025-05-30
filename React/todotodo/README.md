# Managing Component Tree

## What is a Component Tree?

In React, your application is built by composing components. 
These components form a hierarchical structure, much like a family tree, 
starting from a root component (often `<App />`) and branching out to child components, 
which can have their own children, and so on. This hierarchy is known as the **component tree**.

## Why is Managing the Component Tree Important?

Properly managing this tree involves making smart decisions about:

1. **Where state (data) should live.**
2. **How data flows between components (using props).**
3. **How actions from child components can affect parent components or global state (using callback functions).**
4. **How to break down your UI into logical, reusable components.**

## Visualizing component tree in our case

```
App
└── TodoCard             // Manages the overall to-do list logic and state
    ├── FormTodo         // Input form to add new tasks
    └── Tasks            // Displays the list of all tasks
        └── TaskCard     // Displays an individual task and its actions (repeated for each task)
```

## State Management: Lifting State Up

* **Concept:** If multiple components need to share or modify the same piece of data (state), that state should reside in their **closest common ancestor** in the component tree.
* **Why:** This creates a single source of truth for that data, making your application's data flow predictable.
* **Our To-Do App Example:**
    * **The `tasks` array (our list of to-do items) is needed by:**
        * `FormTodo`: To add new tasks to this list.
        * `Tasks`: To display the list.
        * `TaskCard` (indirectly via `Tasks`): To display individual task data and allow actions like deleting or marking as done, which modify the list.
    * **Where the state lives:** The closest common ancestor for `FormTodo` and `Tasks` is `TodoCard`. Therefore, `TodoCard` is the component that "owns" the `tasks` state:

```jsx
// TodoCard.jsx
import { useState } from "react";
// ... other imports

const initialTaskList = [ /* ... your initial tasks ... */ ];

function TodoCard() {
  const [tasks, setTasks] = useState(initialTaskList); // State lives here!

  // Functions that modify this 'tasks' state also live here
  const handleAddTask = (taskName) => { /* ... updates tasks ... */ };
  const handleRemoveTask = (taskId) => { /* ... updates tasks ... */ };
  const handleToggleTaskDone = (taskId) => { /* ... updates tasks ... */ };

  // ... rest of TodoCard
}
```

## Data Flow via Props (Top-Down / Unidirectional Data Flow)

* **Concept:** Data flows from parent components to child components through **props**. Props are read-only in the child component.
* **Why:** This makes it easy to trace where data comes from and prevents child components from accidentally modifying data they don't own, leading to complex bugs.
* **Our To-Do App Example:**

> `TodoCard` (parent) needs to pass the list of `tasks` to `Tasks` (child) so it can display them:

```jsx
// TodoCard.jsx
return (
  <div>
    {/* ... */}
    <Tasks
      taskList={tasks} // Passing the 'tasks' state down as a prop
      // ... other props
    />
  </div>
);
```

> `Tasks` (parent to `TaskCard`) receives `taskList` and then maps over it, passing individual `taskItem` data to each `TaskCard` (child):

```jsx
// Tasks.jsx
function Tasks({ taskList /* ... other props ... */ }) { // Receives taskList as a prop
  return (
    <div>
      {taskList.map((taskItem) => (
        <TaskCard
          key={taskItem.id}
          task={taskItem} // Passing individual task data down
          // ... other props
        />
      ))}
    </div>
  );
}
```

> `TaskCard` receives the individual `task` object as a prop:

```jsx
// TaskCard.jsx
function TaskCard({ task /* ... other props ... */ }) { // Receives task as a prop
  return <div>{task.taskName}</div>;
}
```

## Actions Flow Up via Callbacks (Functions as Props)

* **Concept:** If a child component needs to trigger an action that changes state owned by a parent (or an ancestor), the parent passes a **function** (a callback) as a prop to the child. The child then calls this function when a specific event occurs (e.g., a button click).
* **Why:** This allows child components to communicate intentions to their parents without directly accessing or modifying the parent's state, maintaining the unidirectional data flow principle for state changes.
* **Our To-Do App Example:**
    * **Adding a Task:** `FormTodo` needs to tell `TodoCard` to add a new task.
        * `TodoCard` defines `handleAddTask` and passes it as a prop (e.g., `onAddTask`) to `FormTodo`:

```jsx
// TodoCard.jsx
const handleAddTask = (taskNameFromForm) => { /* ... logic to add task ... */ };
// ...
return <FormTodo onAddTask={handleAddTask} />;
```

> `FormTodo` calls this prop function when its form is submitted:

```jsx
// Form.jsx
function FormTodo({ onAddTask }) { // Receives onAddTask as a prop
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskNameInput); // Calls the function passed from TodoCard
    // ...
  };
  // ...
}
```

> **Removing a Task:** `TaskCard` needs to tell `TodoCard` to remove a specific task.
> `TodoCard` defines `handleRemoveTask` and passes it down through `Tasks` to `TaskCard` (e.g., as `onRemoveTask` then `onRemove`):

```jsx
// TodoCard.jsx
const handleRemoveTask = (taskIdToRemove) => { /* ... logic ... */ };
// ...
return <Tasks taskList={tasks} onRemoveTask={handleRemoveTask} /* ... */ />;

// Tasks.jsx
function Tasks({ taskList, onRemoveTask /* ... */ }) {
  return taskList.map((taskItem) => (
    <TaskCard key={taskItem.id} task={taskItem} onRemove={onRemoveTask} /* ... */ />
  ));
}
```

> `TaskCard` calls this `onRemove` prop function when its delete button is clicked:

```jsx
// TaskCard.jsx
function TaskCard({ task, onRemove /* ... */ }) {
  const handleDelete = () => {
    onRemove(task.id); // Calls the function passed from parent with its task's id
  };
  return <button onClick={handleDelete}>Delete</button>;
}
```

> **Naming Convention for Callbacks:** It's a common convention to name callback props starting with `on` (e.g., `onClick`, `onSubmit`, `onAddTask`, `onRemoveItem`).

# Key TakeAways

## State Management and Data Flow 

### Trying to directly modify imported data or prop

- Keep in mind that imported data like taskList.js or props passed from parent components should be treated as read only 

### Not Lifting State up 

- If multiple components need to access or modify the same piece of data, that data (state) should live in their closest common parent component. 
  - The parent then passes the state down as props and functions to modify the state (callbacks) down as props.

### Changing States

- Always use the setter function provided by useState (e.g., setTasks) to update state. 
  - When updating arrays or objects, create new arrays/objects (often using the spread operator ...) instead of modifying the existing ones directly. 
  - React relies on reference changes to detect updates.

### Forgetting `setState` is Asynchronous

If you need to access the state value immediately after setting it (e.g., for a `console.log`), it might not reflect the new value yet. 
If you need to perform an action after the state has updated, use the `useEffect` hook with that state variable in its dependency array.


## Event Handling

### Incorrectly Calling Event Handler Functions.

- Pass a function reference: `onClick={handleClick}`

- If you need to pass arguments: `onClick={() => handleClick(arg)}`

- Avoid: `onClick={handleClick()}` (this calls the function immediately on render).
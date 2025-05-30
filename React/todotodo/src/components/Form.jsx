import { useState } from "react";

function FormTodo({ onAddTask }) {  // Recieving onAddTask created in TodoCard.jsx

  const [taskNameInput, setTaskNameInput] = useState("");

  const handleChange = (e) => {
    setTaskNameInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission if it's a real form tag
    onAddTask(taskNameInput); // Call the function passed from TodoCard
    setTaskNameInput(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={taskNameInput}
        onChange={handleChange}
        placeholder="Add a new task..."
        className="border-2 border-orange-300 p-2 rounded-l-md flex-grow focus:outline-none focus:border-orange-500"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 focus:outline-none"
      >
        Add
      </button>
    </form>
  )
}

export default FormTodo;
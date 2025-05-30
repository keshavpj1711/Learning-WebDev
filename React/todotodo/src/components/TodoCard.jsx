import FormTodo from "./Form";
import Tasks from "./Tasks";
import { useState } from "react";

function TodoCard() {

  const initialTaskList = [];

  const [tasks, setTasks] = useState(initialTaskList);


  const handleAddTask = (taskNameFromForm) => {
    if (taskNameFromForm.trim() === '') {
      alert("Task name cannot be empty!");
      return;
    }
    const newTask = {
      id: Date.now(), // Simple unique ID
      taskName: taskNameFromForm,
      isDone: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Function to remove a task
  const handleRemoveTask = (taskIdToRemove) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskIdToRemove));
  };

  // Function to toggle task completion (optional, but good for a to-do)
  const handleToggleTaskDone = (taskIdToToggle) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskIdToToggle ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="rounded-lg bg-orange-100 p-4 m-2">
      <FormTodo 
        onAddTask = {handleAddTask}
      />
      <Tasks 
        taskList = {tasks}
        onRemoveTask = {handleRemoveTask}
        onToggleTaskDone = {handleToggleTaskDone}
      />
    </div>
  )
}

export default TodoCard;
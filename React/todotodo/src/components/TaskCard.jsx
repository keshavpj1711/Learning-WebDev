function TaskCard({ task, onRemove, onToggleDone }) {

  const handleDelete = () => {
    onRemove(task.id); // Call the onRemove function passed from parent with task's id
  };

  const handleToggle = () => {
    onToggleDone(task.id); // Call the onToggleDone function
  };


  return (
    <div
      className={`flex items-center justify-between p-3 rounded-md shadow ${task.isDone ? 'bg-green-100 opacity-70' : 'bg-white'
        }`}
    >
      <span
        onClick={handleToggle}
        className={`cursor-pointer flex-grow ${task.isDone ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        title={task.isDone ? "Mark as not done" : "Mark as done"}
      >
        {task.taskName}
      </span>
      <button
        onClick={handleDelete}
        className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs focus:outline-none"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskCard;
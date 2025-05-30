import TaskCard from "./TaskCard";

function Tasks({ taskList, onRemoveTask, onToggleTaskDone }) {

  if (!taskList || taskList.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No tasks yet. Add some!</p>;
  }

  return (
    <div className="mt-4">
      <div className="text-xl flex justify-center mb-2 text-orange-600 font-semibold">
        Tasks
      </div>
      <div className="flex flex-col gap-2"> {/* Removed bg-white, p-2, rounded-md to inherit from TodoCard or let TaskCard handle its own style */}
        {taskList.map((taskItem) => ( // Renamed 'task' to 'taskItem' for clarity
          <TaskCard
            key={taskItem.id}
            task={taskItem} // Pass the whole task object
            onRemove={onRemoveTask} // Pass down the remove handler
            onToggleDone={onToggleTaskDone} // Pass down the toggle handler
          />
        ))}
      </div>
    </div>
  )
}

export default Tasks;
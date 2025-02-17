import { taskShape, taskActionsShape } from "../utils/propTypes";


TaskItem.propTypes = {
  task: taskShape.isRequired,
  ...taskActionsShape,
}


function TaskItem({ task, deleteTask, toggleCompleted }) {
  const handleDelete = () => deleteTask(task.id);
  return (
    <li  
      className={`p-3 mb-2 flex justify-between items-center border rounded-lg shadow-md transition
        ${task.completed ? "bg-gray-100 text-gray-500" : "bg-white"}
      `}
    >
      <div className={`${task.completed ? "line-through" : ""}`}>
        <span className="text-amber-900 mr-5">{task.createdAt}</span>
        <span className="max-w-full text-gray-800">{task.text}</span>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => toggleCompleted(task.id)}
          className="cursor-pointer"
        >
          {task.completed ? '❌' : '✔️'}
        </button>
        <button 
          onClick={handleDelete}
          className="cursor-pointer"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
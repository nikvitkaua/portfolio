import { useState, useEffect } from "react";

import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  const addTask = (taskText) => {
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toLocaleString(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  }

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  }

  return (
    <div className="max-w-full mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Todo List</h1>
      <TaskInput addTask={addTask} />

      <ul className="mt-4">
        {tasks.map((task) => (
          <li 
            key={task.id} 
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
                 className="text-green-500 hover:text-green-600 cursor-pointer"
              >
                {task.completed ? '❌' : '✔️'}
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                className="text-red-500 hover:text-red-600 cursor-pointer"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

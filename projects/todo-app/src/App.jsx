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
    const newTask = { id: Date.now(), text: taskText, completed: false };
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
    <div>
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => toggleCompleted(task.id)} style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            {task.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App

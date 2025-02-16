import {useState} from "react";

import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  }

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
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

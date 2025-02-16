import {useState} from "react";

import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App

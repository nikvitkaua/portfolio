import {useState} from "react";
import PropTypes from "prop-types"

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    } else {
      alert("Please enter a task!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Take a key from the office..."
          value={task}
          onChange={handleChange} 
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
}


export default TaskInput;
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
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Take a key from the office..."
          value={task}
          onChange={handleChange}
          className="w-full p-2 border rounded-md border-blue-500 text-black focus:outline-1 focus:outline-blue-600"
        />
        <button
         type="submit"
          className="bg-blue-500 max-w-64 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >Add task</button>
      </form>
    </>
  );
}


export default TaskInput;
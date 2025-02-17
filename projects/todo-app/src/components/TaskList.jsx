import PropTypes from "prop-types";
import { taskShape, taskActionsShape } from "../utils/propTypes";

import TaskItem from "./TaskItem";

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(taskShape).isRequired,
  ...taskActionsShape,
};

function TaskList({ tasks, deleteTask, toggleCompleted  }) {
  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleCompleted={toggleCompleted} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
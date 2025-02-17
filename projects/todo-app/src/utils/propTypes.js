import PropTypes from "prop-types";

export const taskShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
});


export const taskActionsShape = {
  deleteTask: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
}
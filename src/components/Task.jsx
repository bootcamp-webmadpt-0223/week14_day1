/* eslint-disable react/prop-types */
function Task(props) {
  return (
    <div className="task">
      <p className="task-name">{props.name}</p>
      <p className="task-status">{props.isDone ? "Done!" : "Pending"}</p>
      <button onClick={() => props.toggleDone(props._id)}>
        {props.isDone ? "Undo" : "Do"}
      </button>
    </div>
  );
}

export default Task;

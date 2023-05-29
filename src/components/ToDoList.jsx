import { useState } from "react";
import Summary from "./Summary";
import Task from "./Task";
import "./ToDoList.css";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    isDone: false
  },
  {
    _id: "2b",
    name: "Task2",
    isDone: false
  },
  {
    _id: "3c",
    name: "Task3",
    isDone: false
  }
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [name, setName] = useState("");

  const handleChange = event => {
    console.log(event.target.value);
    const taskName = event.target.value;
    setName(taskName);
  };

  const toggleDone = taskId => {
    const copy = [...tasks];
    const task = copy.find(task => task._id === taskId);
    task.isDone = !task.isDone;
    // ref tasks === ref tasks
    setTasks(copy);
  };

  const handleClick = () => {
    const copy = [...tasks];
    copy.unshift({ _id: `${Math.random() * 100}`, name, isDone: false });
    setTasks(copy);
  };

  return (
    <div className="todo-list">
      <Summary />

      <div className="todo-container">
        <div>
          <input name="name" placeholder="Task name" onChange={handleChange} />
          <button onClick={handleClick}>Create task with name {name}</button>
        </div>
        {/* <Task />
        <Task />
        <Task /> */}
        {tasks.map(task => (
          <Task
            key={task._id}
            // _id={task._id}
            // name={task.name}
            // isDone={task.isDone}
            {...task}
            toggleDone={toggleDone}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;

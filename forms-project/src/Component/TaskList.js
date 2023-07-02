import React, { useState } from "react";
import TaskCard from "./TaskCard";
import "./TaskList.css";

const TaskList = ({ info }) => {
  // <-- Add curly braces to destructure the props
  const [tasks, setTasks] = useState([
    { id: 1, name: "Kajal", completed: true },
    { id: 2, name: "PM", completed: false },
    { id: 3, name: "Pritam", completed: true },
  ]);
  const [show, setShow] = useState(true);
  const styles={
    color: show ? "#3D8361" :" #be3434",
    border: "2px solid",
    borderColor: show ? "#3D8361" :" #be3434",
    borderRadius:"10px",
    padding: "10px",
  }
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="tasklist">
      <h1
        style={styles}
      >
        Task List
      </h1>
      <button className="trigger" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      <ul >
        {show &&
          tasks.map((task, index) => (
            <TaskCard 
              key={index}
              task={task}
              info={info}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;

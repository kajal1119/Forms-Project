import React from "react";
import './TaskCard.css'
import styles from './TaskCard.module.css'
const TaskCard = ({ task, info, handleDelete }) => {
  return (
    <li className={`taskcard ${task.completed ? "completed" : "incomplete"}`}>
      <span className={styles.title}>
        {task.id} {info} - {task.name}
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
};

export default TaskCard;

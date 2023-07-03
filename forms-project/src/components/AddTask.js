import React, { useRef, useState } from "react";
import "./AddTask.css";
const AddTask = ({tasks,setTasks}) => {
  // const [taskValue, setTaskValue] = useState("");
  const taskRef=useRef("")
  const [progress,setProgress]=useState(false)
  // const handlChange = (event) => {
  //   setTaskValue(event.target.value);
  // };
  const handleReset = ()=>{
     taskRef.current.value=""
      setProgress(false)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const task={
      id:Math.floor(Math.random()*10000),
      name: taskRef.current.value,
      completed:Boolean(progress)
      
    }
    setTasks([...tasks,task])
    // console.log(task)
    handleReset()

  }
  const handleSelect=(event)=>{
    setProgress(event.target.value)
  }

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          ref={taskRef}
        />
        <select onChange={handleSelect} value={progress} >
        <option value={false}>Pending</option>
        <option value={true}>Completed</option>
        </select>
        <span className="reset" onClick={handleReset}>Reset</span>
        <button type="submit">Add Task</button>
        
      </form>
      <p>{taskRef.current.value}</p>
    </section>
  );
};

export default AddTask;

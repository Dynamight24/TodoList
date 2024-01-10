import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState("");
  const [Description, setDescritption] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { Title, Description }]);
    setTitle("");
    setDescritption("")
  };

  const deleteTask=(index)=>{
    const filteredArray=tasks.filter((val,i)=>{
        return i!==index;
    }
    );
    setTasks(filteredArray);
}
useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));},
    [tasks]);
  return (
    <div className="container">
        
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={Description}
          onChange={(e) => setDescritption(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      
      {tasks.map((item, index) => (

        <Task key={index} Title={item.Title} Description={item.Description} deleteTask={deleteTask} index={index} />
      ))}
    </div>
  );
}

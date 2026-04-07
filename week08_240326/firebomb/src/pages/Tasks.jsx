import { useState, useRef } from "react";
import TaskList from "../components/TaskList";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const addTask = () => {

    const text = inputRef.current.value;

    if(text === "") return;

    setTasks([...tasks, { id: Date.now(), text }]);

    inputRef.current.value = "";
  };

  return (
    <div className="page">

      <h2>Task Manager</h2>

      <input ref={inputRef} placeholder="Enter task" />

      <button onClick={addTask}>Add</button>

      <TaskList tasks={tasks} />

    </div>
  );
}

export default Tasks;
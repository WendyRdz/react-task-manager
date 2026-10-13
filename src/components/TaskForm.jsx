import { useState } from "react";

function TaskForm( {onAddTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  
  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        status: status,
    };

    onAddTask(newTask);
     setTitle("");
     setDescription("");
     setStatus("Pending");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
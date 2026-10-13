import { useEffect, useState } from "react";


const STORAGE_KEY = "react-task-manager-tasks";

function useTasks() {
  const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch {
    return [];
  }
});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const [hasSavedTasks] = useState(
  () => localStorage.getItem(STORAGE_KEY) !== null
);


useEffect(() => {
  if (loading || error) return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(tasks)
  );
}, [tasks, loading, error]);


useEffect(() => {
  if (hasSavedTasks) {
    setLoading(false);
    return;
  }

  let cancelled = false;

  async function fetchTasks() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();

      const formattedTasks = data.map((task) => ({
        id: task.id,
        title: task.title,
        description: "Task loaded from API",
        status: task.completed ? "Completed" : "Pending",
      }));

      if (!cancelled) {
        setTasks(formattedTasks);
      }
    } catch (error) {
      if (!cancelled) {
        setError(error.message);
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  }

  fetchTasks();

  return () => {
    cancelled = true;
  };
}, [hasSavedTasks]);

function addTask(newTask) {
  setTasks((currentTasks) => [
    ...currentTasks,
    newTask
  ]);
}

function deleteTask(id) {
  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== id)
  );
}


function updateTaskStatus(id) {
  setTasks((currentTasks) =>
    currentTasks.map((task) => {
      if (task.id !== id) {
        return task;
      }

      let nextStatus;

      if (task.status === "Pending") {
        nextStatus = "In Progress";
      } else if (task.status === "In Progress") {
        nextStatus = "Completed";
      } else {
        nextStatus = "Pending";
      }

      return {
        ...task,
        status: nextStatus,
      };
    })
  );
}

  return {
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
    updateTaskStatus
  };
}

export default useTasks;
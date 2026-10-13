import { useState } from "react";

import useTasks from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskFilters from "../components/TaskFilters";
import TaskStats from "../components/TaskStats";
import TaskList from "../components/TaskList";

function Tasks() {
  const [filter, setFilter] = useState("All");

  const {
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
    updateTaskStatus,
  } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    }

    return task.status === filter;
  });

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <section>
      <h1>Tasks</h1>

      <TaskForm onAddTask={addTask} />

      <TaskFilters
        filter={filter}
        onFilterChange={setFilter}
      />

      <TaskStats
        total={tasks.length}
        completed={completedTasks}
      />

      {loading && <p>Loading tasks...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <TaskList
          tasks={filteredTasks}
          onStatusChange={updateTaskStatus}
          onDelete={deleteTask}
        />
      )}
    </section>
  );
}

export default Tasks;
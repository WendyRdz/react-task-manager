import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskForm  from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import useTasks from "./hooks/useTasks";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import "./App.css";

// function App() {
// const {
//   tasks,
//   loading,
//   error,
//   addTask,
//   deleteTask,
//   updateTaskStatus,
// } = useTasks();

// const [filter, setFilter] = useState("All");

// const filteredTasks = tasks.filter((task) => {
//   if (filter === "All") {
//     return true;
//   }

//   return task.status === filter;
// });

//   const completedTasks = tasks.filter(
//     (task) => task.status === "Completed"
//   ).length;
  

//   return (
//     <main>
//     <Header />
//     <TaskForm onAddTask={addTask} />
//     <TaskFilters
//       filter={filter}
//       onFilterChange={setFilter}
//     />
//       {loading && <p>Loading tasks...</p>}

//       {error && <p>{error}</p>}

//       {!loading && !error && (
//         <TaskList
//           tasks={filteredTasks}
//           onStatusChange={updateTaskStatus}
//           onDelete={deleteTask}
//         />
//       )}
//     </main>
//   );

// }

// export default App;

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/tasks/:id"
          element={<TaskDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
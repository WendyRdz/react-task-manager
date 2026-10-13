function TaskFilters({ filter, onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange("All")}>
        All
      </button>

      <button onClick={() => onFilterChange("Pending")}>
        Pending
      </button>

      <button onClick={() => onFilterChange("In Progress")}>
        In Progress
      </button>

      <button onClick={() => onFilterChange("Completed")}>
        Completed
      </button>

      <p>Current filter: {filter}</p>
    </div>
  );
}

export default TaskFilters;
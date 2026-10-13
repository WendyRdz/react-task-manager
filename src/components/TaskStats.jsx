function TaskStats({ total, completed }) {
  return (
    <p>
      {total} tasks · {completed} completed
    </p>
  );
}

export default TaskStats;
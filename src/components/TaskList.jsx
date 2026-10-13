import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}) {
  return (
    <section>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          onStatusChange={onStatusChange}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </section>
  );
}

export default TaskList;
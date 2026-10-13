import { Link } from "react-router-dom";

function TaskCard({id, title, description, status,  onStatusChange, onDelete }) {
  return (
    <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Status: {status}</p>
      <button onClick={() => onStatusChange(id)}>
        Next Status
      </button>
      <button onClick={onDelete}>
        Delete
      </button>
      <Link to={`/tasks/${id}`}>
        View Details
      </Link>
    </article>
  );
}

export default TaskCard;
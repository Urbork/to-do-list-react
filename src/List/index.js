import "./style.css";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks__list">
    {tasks.map((task) => (
      <li
        className={`tasks__listItem
        ${hideDone && task.done ? "tasks__listItem--hidden" : ""}`}
        key={task.id}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="tasks__button"
        >
          {task.done ? "✓" : ""}
        </button>
        <span
          className={`tasks__listItemText
        ${task.done ? " tasks__listItemText--done" : ""}
        `}
        >
          {task.id} - {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="tasks__button tasks__button--remove"
        >
          X
        </button>
      </li>
    ))}
  </ul>
);

export default List;

import "./style.css";

const List = (props) => (
  <ul className="tasks__list">
    {props.tasks.map((task) => (
      <li
        className={`tasks__listItem
        ${props.hideDoneTasks && task.done ? "tasks__listItem--hidden" : ""}`}
        key={task.id}
      >
        <button className="tasks__button">{task.done ? "✓" : ""}</button>
        <span
          className={`tasks__listItemText
        ${task.done ? " tasks__listItemText--done" : ""}
        `}
        >
          {task.content}
        </span>
        <button className="tasks__button tasks__button--remove">X</button>
      </li>
    ))}
  </ul>
);

export default List;

import "./style.css";

const Buttons = (props) => {
  if (props.tasks.length === 0) {
    return null;
  }

  return (
    <div className="buttons">
      <button className="buttons__button">
        {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={props.tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;

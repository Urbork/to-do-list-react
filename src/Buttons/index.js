import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="buttons">
      <button onClick={toggleHideDone} className="buttons__button">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;

import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__input"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;

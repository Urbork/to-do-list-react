import { useState, useRef } from "react";
import { MainForm, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const focusRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    focusRef.current.focus();
  };

  return (
    <MainForm onSubmit={onFormSubmit}>
      <FormInput
        ref={focusRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <FormButton>Dodaj zadanie</FormButton>
    </MainForm>
  );
};

export default Form;

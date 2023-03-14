import { useState } from "react";
import styled, { css } from "styled-components";
import "./style.css";

const StyledButton = styled.button`
  border: 1px solid teal;
  padding: 10px;
  margin: 10px;
  background: white;
  color: teal;
  cursor: pointer;

  &:hover {
    background: teal;
    color: white;
  }

  ${(props) => props.primary && css`
    background: teal;
    color: white;
  `}
`;

const StyledPrimaryButton = styled(StyledButton)`
  background: teal;
  color: white;
`;

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
      <StyledButton primary>Główny Przycisk</StyledButton>
      <StyledButton>Przycisk</StyledButton>
      <StyledPrimaryButton>Główny Przycisk v2</StyledPrimaryButton>
    </form>
  );
};

export default Form;

import { useState, useRef, FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { MainForm } from "./styled";
import { FormButton } from "../styled";
import Input from "../../Input/index.js";
import { addTask } from "../../tasksSlice.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const focusRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    const newTaskId = nanoid();

    if (trimmedNewTaskContent === "") {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: newTaskId,
      })
    );

    setNewTaskContent("");
    focusRef.current!.focus();
  };

  return (
    <MainForm onSubmit={onFormSubmit}>
      <Input
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

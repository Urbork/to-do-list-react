import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";

const PREVIOUS_TASKS = JSON.parse(localStorage.getItem("tasks"));

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    PREVIOUS_TASKS
      ? PREVIOUS_TASKS
      : [{ id: 1, content: "przykładowe zadanie", done: true }]
  );

  localStorage.setItem("tasks", JSON.stringify(tasks));

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[0].id + 1,
      },
      ...tasks,
    ]);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <List
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;

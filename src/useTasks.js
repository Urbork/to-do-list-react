import { useState, useEffect } from "react";

const previousTasks = JSON.parse(localStorage.getItem("tasks"));

export const useTasks = () => {
  const [tasks, setTasks] = useState(
    previousTasks
      ? previousTasks
      : [{ id: 1, content: "przykładowe zadanie", done: true }]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};

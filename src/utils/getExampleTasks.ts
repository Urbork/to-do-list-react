import { Task } from "../features/tasks/types";

export const getExampleTasks = async () => {
  const response = await fetch("/to-do-list-react/exampleTasks.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Task[];
};

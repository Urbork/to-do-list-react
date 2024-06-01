import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.unshift(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, { payload: taskIndex }) => {
      const index = state.tasks.findIndex((task) => task.id === taskIndex);
      state.tasks[index].done = !state.tasks[index].done;
    },
    removeTask: (state, { payload: taskIndex }) => {
      const index = state.tasks.findIndex((task) => task.id === taskIndex);
      state.tasks.splice(index, 1);
    },
    setAllDone: (state) => {
      state.tasks.forEach((task) => (task.done = true));
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);
export const selectLoading = (state) => selectTasksState(state).isLoading;
export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;

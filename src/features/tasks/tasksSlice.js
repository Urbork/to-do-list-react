import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
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
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export default tasksSlice.reducer;

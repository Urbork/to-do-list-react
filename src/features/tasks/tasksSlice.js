import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      // {
      //   id: 1,
      //   content: "test",
      //   done: true,
      // },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].done = !state.tasks[index].done;
      }
      // state.tasks[index].done = !state.tasks[index].done;
      console.log(action.payload);
    },
  },
});

export const { addTask, toggleHideDone, toggleTaskDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;

// console.log(
//   addTask({
//     content: "Nauczyć się Reduxa i Reacta",
//     done: false,
//     id: 999,
//   })
// );

// console.log(
//   tasksSlice.reducer(
//     { tasks: [] },
//     addTask({
//       content: "Test123",
//       done: true,
//     })
//   )
// );

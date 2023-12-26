import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Tasks from "./features/tasks/Tasks";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
// import { addTask } from "./features/tasks/tasksSlice";
import store from "./store";
// import { configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [],
// };

// const tasksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "addTask":
//       return {
//         ...state,
//         tasks: [...state.tasks, { content: action.payload }],
//       };
//     default:
//       return state;
//   }
// };

// const addTask = (content) => ({
//   type: "addTask",
//   payload: content,
// });

// const selectTasks = (state) => state.tasks;

// const store = configureStore({ reducer: tasksReducer });
// console.log(store.getState());

// // store.dispatch({
// //   type: "addTask",
// //   payload: "Nauczyć się dispatch",
// // });

// store.dispatch(addTask("Nauczyć się dispatch"));

// console.log(store.getState());
// console.log(selectTasks(store.getState()));

// // store.dispatch({
// //   type: "addTask",
// //   payload: "Zrobić kolejne zadanie",
// // });

// store.dispatch(addTask("Zrobić kolejne zadanie"));

// console.log(store.getState());
// console.log(selectTasks(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

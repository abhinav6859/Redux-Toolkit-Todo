import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todo/slice.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
   
  }
});
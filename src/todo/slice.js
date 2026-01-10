
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  status: "idle",
  error: null
};


// ASYNC THUNKS


// GET TODOS
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    return res.data;
  }
);

// ADD TODO
export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async ({ name, description, date }) => {
    const res = await axios.post("http://localhost:5000/api/todos", {
      name,
      description,
      date
    });
    return res.data;
  }
);
// TOGGLE TODO
export const toggleTodoAsync = createAsyncThunk(
  "todo/toggleTodo",
  async (todo) => {
    const res = await axios.put(
      `http://localhost:5000/api/todos/${todo._id}/toggle`
    );
    return res.data;
  }
);

// UPDATE TODO
export const updateTodoAsync = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, description }) => {
    const res = await axios.put(
      `http://localhost:5000/api/todos/${id}`,
      { description }
    );
    return res.data;
  }
);

// DELETE TODO
export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodo",
  async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    return id;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // optional local reducer
  },
  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
    
     state.status = "succeeded";
  state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      // ADD
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.unshift(action.payload);
      })

      // UPDATE
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
         
        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      // TOGGLE
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload
        );
      });
  }
});

export default todoSlice.reducer;

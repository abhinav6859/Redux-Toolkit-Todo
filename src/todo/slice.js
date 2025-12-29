import { createSlice , nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos : [
        { id: nanoid(), description: "Learn Redux Toolkit", completed: false },
        { id: nanoid(), description: "Build a Todo App", completed: false         }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
     const newTodo = {
         id: nanoid(),
    description: action.payload.description,
    date: action.payload.date,
    name: action.payload.name,
    completed: false
    }
    state.todos.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, description } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.description = description;
            }
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;



// import { createSlice, createAsyncThunk ,nanoid} from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/todos";

// const initialState = {
//     todos : [
//         { id: nanoid(), description: "Learn Redux Toolkit", completed: false },
//         { id: nanoid(), description: "Build a Todo App", completed: false         }
//     ]
// }

// /* ============================
//    ASYNC THUNKS
// ============================ */

// // Fetch all todos
// export const fetchTodos = createAsyncThunk(
//   "todos/fetchTodos",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(API_URL);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Add new todo
// export const addTodo = createAsyncThunk(
//   "todos/addTodo",
//   async (todoData, thunkAPI) => {
//     try {
//       const res = await axios.post(API_URL, todoData);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Update todo (toggle / edit)
// export const updateTodo = createAsyncThunk(
//   "todos/updateTodo",
//   async ({ id, data }, thunkAPI) => {
//     try {
//       const res = await axios.put(`${API_URL}/${id}`, data);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Delete todo
// export const deleteTodo = createAsyncThunk(
//   "todos/deleteTodo",
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// /* ============================
//    SLICE
// ============================ */

// const todoSlice = createSlice({
//   name: "todos",
//   initialState: {
//     todos: [],
//     isLoading: false,
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder

//       // FETCH
//       .addCase(fetchTodos.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.todos = action.payload;
//       })
//       .addCase(fetchTodos.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // ADD
//       .addCase(addTodo.fulfilled, (state, action) => {
//         state.todos.unshift(action.payload);
//       })

//       // UPDATE
//       .addCase(updateTodo.fulfilled, (state, action) => {
//         const index = state.todos.findIndex(
//           (todo) => todo._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.todos[index] = action.payload;
//         }
//       })

//       // DELETE
//       .addCase(deleteTodo.fulfilled, (state, action) => {
//         state.todos = state.todos.filter(
//           (todo) => todo._id !== action.payload
//         );
//       });
//   }
// });

// export default todoSlice.reducer;

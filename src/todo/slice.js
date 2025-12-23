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
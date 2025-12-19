import { createSlice , nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos : [
        { id: nanoid(), title: "Learn Redux Toolkit", completed: false },
        { id: nanoid(), title: "Build a Todo App", completed: false         }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
     const newTodo = {
        id: nanoid(),
        title: action.payload,
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
            const { id, title } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.title = title;
            }
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
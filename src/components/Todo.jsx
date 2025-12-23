import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { updateTodo } from "../todo/slice.js";



function Todo() {
  const Todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();


  const [editId, setEditId] = React.useState(null);
const [editText, setEditText] = React.useState("");
const [openId, setOpenId] = React.useState(null);

  return (
    <>
      <div className="text-2xl font-bold mt-8">Todo List</div>
      {Todos.map((todo) => (
   
      <li
  className="
    flex justify-between items-center
    bg-gradient-to-r from-blue-100 to-blue-200
    px-5 py-3 my-3 rounded-xl
    shadow-md hover:shadow-lg
    transition-all duration-300
    hover:scale-[1.01]
  "
  key={todo.id}
>

         <div
  className="
    text-gray-800 font-medium
    transition-all duration-300
    group-hover:translate-x-1
  "
>
  {todo.description}
</div>

<button
  onClick={() =>
    setOpenId(openId === todo.id ? null : todo.id)
  }
  className="text-blue-500 text-sm hover:underline transition"
>
  {openId === todo.id ? "Show less ↑" : "Read more →"}
</button>
{openId === todo.id && (
  <div
    className="
      mt-2 space-y-1
      text-sm text-gray-700
      animate-[fadeIn_0.25s_ease-in-out]
    "
  >
    <div>
      <span className="font-semibold">📄 Description:</span>{" "}
      {todo.description}
    </div>

    <div>
      <span className="font-semibold">📅 Date:</span>{" "}
      {todo.date || "Not set"}
    </div>

    <div>
      <span className="font-semibold">👤 Name:</span>{" "}
      {todo.name || "Unknown"}
    </div>
  </div>
)}


          <button
            onClick={() =>
              dispatch({ type: "todo/toggleTodo", payload: todo.id })
            }
            className="text-2xl"
          >
            {todo.completed ? <FaCheckCircle color="green" /> : <FaRegCircle />}
          </button>

        <div
  className={`
    px-3 py-1 rounded-full text-sm font-semibold
    transition-all duration-300
    ${
      todo.completed
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
    }
  `}
>
  {todo.completed ? "Completed" : "Pending"}
</div>

        
         

{/* Title / Input */}
{editId === todo.id ? (
<input
  value={editText}
  onChange={(e) => setEditText(e.target.value)}
  autoFocus
  className="
    px-3 py-2 w-56
    rounded-lg border border-blue-400
    bg-white text-gray-800
    focus:outline-none focus:ring-2 focus:ring-blue-500
    transition-all duration-300 ease-in-out
    animate-[fadeIn_0.3s_ease-in-out]
  "
/>

) : (
  <div className="text-black"></div>
)}

{/* Edit / Save Button */}
{editId === todo.id ? (
 <button
  onClick={() => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: todo.id, description: editText }));
    }
    setEditId(null);
  }}
  className="
    bg-green-500 text-white
    px-4 py-1.5 rounded-lg
    shadow-sm
    hover:bg-green-600 hover:shadow-md
    active:scale-95
    transition-all duration-200
  "
>
  Save
</button>

) : (
 <button
  onClick={() => {
    setEditId(todo.id);
    setEditText(todo.description);
  }}
  className="
    bg-yellow-400 text-black
    px-4 py-1.5 rounded-lg
    shadow-sm
    hover:bg-yellow-500 hover:shadow-md
    active:scale-95
    transition-all duration-200
  "
>
  Edit
</button>

)}

         <button
  onClick={() =>
    dispatch({ type: "todo/deleteTodo", payload: todo.id })
  }
  className="
    bg-red-500 text-white
    px-4 py-1.5 rounded-lg
    shadow-sm
    hover:bg-red-600 hover:shadow-md
    active:scale-95
    transition-all duration-200
  "
>
  Delete
</button>

        </li>
   
      ))}
    </>
  );
}

export default Todo;

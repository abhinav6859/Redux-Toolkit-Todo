import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../todo/slice.js'



function Addtodo ()  {
    
    const dispatch = useDispatch();
    const [input, setInput] = React.useState("")

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
   return (
  
  <form
  onSubmit={addTodoHandler}
  className="
    mt-12 flex items-center gap-3
    transition-all duration-300
  "
>
  <input
    type="text"
    placeholder="Add todo"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="
      bg-gray-800 text-white
      px-4 py-2 w-64
      rounded-lg border border-gray-700
      placeholder-gray-400
      focus:outline-none focus:ring-2 focus:ring-blue-500
      focus:border-blue-500
      transition-all duration-300
    "
  />

  <button
    type="submit"
    className="
      bg-blue-600 text-white
      px-5 py-2 rounded-lg
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      active:scale-95
      transition-all duration-200
    "
  >
    Add
  </button>
</form>

  )
}

export default Addtodo

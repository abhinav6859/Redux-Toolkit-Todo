import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todo/slice.js';

function Addtodo() {
  const dispatch = useDispatch();
 
  const [showForm, setShowForm] = React.useState(false);
  const [description, setDescription] = React.useState("");
const [date, setDate] = React.useState("");
const [name, setName] = React.useState("");


  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ description, date, name }));
    setDescription("");
    setDate("");
    setName("");
    setShowForm(false);
  };

  return (
    <>
 
      
     <div className="relative mt-10 mb-12 flex justify-center">
  <div
    className="
      w-[90%] max-w-3xl
      rounded-2xl
      bg-white/10 backdrop-blur-xl
      border border-white/20
      shadow-2xl
      px-8 py-6
      animate-[fadeInUp_0.7s_ease-out]
    "
  >
    <h1
      className="
        text-center text-4xl md:text-5xl font-bold tracking-tight
        bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400
        bg-clip-text text-transparent
      "
    >
      Task Manager
    </h1>

    <p
      className="
        text-center mt-3 text-gray-300 text-sm md:text-base
        animate-[fadeIn_1s_ease-out]
      "
    >
      Plan smart. Execute better. Stay consistent.
    </p>

    <div className="mt-5 flex justify-center">
      <span
        className="
          h-[3px] w-24 rounded-full
          bg-gradient-to-r from-cyan-400 to-purple-500
          animate-[expand_0.8s_ease-out]
        "
      ></span>
    </div>
  </div>
</div>

<div className=" flex items-center justify-center">
      <button
        onClick={() => setShowForm(true)}
        className="
    flex items-center justify-center
          bg-blue-600 text-white
          px-6 py-2 rounded-xl
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          active:scale-95
          transition-all duration-200
        "
      >
        Add Todo
      </button>
</div>
      {/* Form */}
      {showForm && (
  <div
    className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/40 backdrop-blur-sm
      transition-all duration-300
    "
  >
    {/* FORM CONTAINER */}
    <div
      className="
        w-full max-w-lg mx-4
        animate-[zoomIn_0.3s_ease-out]
      "
    >
      <form
            onSubmit={addTodoHandler}
            className="
              max-w-md
              bg-gradient-to-br from-gray-900 to-gray-800
              p-6 rounded-2xl
              shadow-xl
              space-y-5
            "
          >
            {/* Todo Description */}
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Todo description"
              className="
                w-full px-4 py-2
                rounded-lg
                bg-gray-700 text-white
                placeholder-gray-400
                border border-gray-600
                focus:ring-2 focus:ring-blue-500
                transition-all
              "
            />

            {/* Date */}
            <input
              type="date"
             value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
                w-full px-4 py-2
                rounded-lg
                bg-gray-700 text-white
                border border-gray-600
                focus:ring-2 focus:ring-blue-500
                transition-all
              "
            />

            {/* Name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="
                w-full px-4 py-2
                rounded-lg
                bg-gray-700 text-white
                placeholder-gray-400
                border border-gray-600
                focus:ring-2 focus:ring-blue-500
                transition-all
              "
            />

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="
                  flex-1 bg-green-600 text-white
                  py-2 rounded-lg
                  hover:bg-green-700
                  active:scale-95
                  transition-all
                "
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="
                  flex-1 bg-gray-600 text-white
                  py-2 rounded-lg
                  hover:bg-gray-700
                  active:scale-95
                  transition-all
                "
              >
                Cancel
              </button>
            </div>
          </form>
    </div>
  </div>
)}
     </>

  );
}

export default Addtodo;

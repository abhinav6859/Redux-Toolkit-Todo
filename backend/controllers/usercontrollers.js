import Todo from "../models/usermodel.js";


// Get all todos
export const getTodos = async (req, res) => {
  try {
  const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Create a new todo
export const createTodo = async (req, res) => {
  try {
    const { name, description, date } = req.body;

     if (!description || !name || !date) {
      return res.status(400).json({ message: "Description, name, and date are required" });
    }

    const newTodo = await Todo.create({ name, description, date, completed: false });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update a todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, date, completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { name, description, date, completed },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
// toggletodo completion
export const toggleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete a todo
export const deleteTodo = async (req, res) => {
  try { 
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }   
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


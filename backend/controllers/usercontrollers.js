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
    const { description } = req.body;
    const newTodo = new Todo({ description, completed: false });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update a todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      req.body, 
        { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
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


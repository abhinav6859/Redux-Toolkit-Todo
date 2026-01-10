import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo
} from "../controllers/usercontrollers.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.put("/:id/toggle", toggleTodo);
router.delete("/:id", deleteTodo);

export default router;

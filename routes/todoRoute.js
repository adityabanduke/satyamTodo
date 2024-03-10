const express = require("express");
const router = express.Router();
const { addTodo, getTodo, getAllTodo ,updateTodo, deleteTodo } = require("../controllers/todo.controller.js");

router.post("/addTodo" , addTodo);
router.get("/getTodo/:id", getTodo);
router.get("/getAllTodo", getAllTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
const Todo = require("../models/todo.js");
const addTodo = async (req, res) => {
  try {
    // console.log(req)
    const { name, completed, uid } = req.body;
    console.log(name, completed, uid);
    const todo = new Todo({
      name,
      completed,
      uid,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, completed, uid } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { name, completed, uid },
      { new: true }
    );
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json("Todo deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  addTodo,
  getTodo,
  getAllTodo,
  updateTodo,

  deleteTodo,
};

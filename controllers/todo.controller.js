const { mongoose } = require("mongoose");
const Todo = require("../models/todo.js");
const addTodo = async (req, res) => {
  try {
    // console.log(req)
    const { title, completed, uid , desc } = req.body;
    console.log(title, completed, uid);
    const todo = new Todo({
      title,
      completed,
      uid,
      desc
    });
    await todo.save();
    res.status(201).json("todo added");
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
    console.log(typeof id);
    const todos = await Todo.find({ uid:id });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed, uid , desc } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, completed, uid,desc },
      { new: true }
    );
    res.status(200).json("todo updated");
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

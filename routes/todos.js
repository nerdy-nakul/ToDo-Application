const express = require("express");

const router = express.Router();

// import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { login, signup } = require("../controllers/auth");
const { Auth } = require("../middlewares/Auth");

// API routes
router.post("/login", login);
router.post("/signup", signup);

router.post("/createTodo", Auth, createTodo);
router.get("/getTodos", Auth, getTodo);
router.get("/getTodos/:id", Auth, getTodoById);
router.put("/updateTodo/:id", Auth, updateTodo);
router.delete("/deleteTodo/:id", Auth, deleteTodo);

module.exports = router;

const express = require('express');
const TodoController = require('../todosController/todos');
const Todo = require('./../models/Todo');

const router = express.Router();

router.get('/todos', TodoController.getAllTodos);
router.get('/todos/:id', TodoController.getTodo);
router.post('/todos', TodoController.createTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);

module.exports = router;
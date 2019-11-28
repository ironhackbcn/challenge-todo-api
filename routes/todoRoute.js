const express = require('express');
const TodoController = require('../todosController/todos');

const router = express.Router();

router.get('/todos', TodoController.getAllTodos);
router.get('/todos/:id', TodoController.getTodo);
router.post('/todos', TodoController.createTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);
router.put('/todos/done/:id', TodoController.updateDone)

module.exports = router;
var express = require('express');
var router = express.Router();

const todoController = require('../controller/todoController');

/* TODOs */
router.get('/todo', todoController.get_all_task);
router.post('/todo', todoController.create_task);
router.delete('/todo', todoController.delete_task);
router.put('/todo', todoController.update_task);

module.exports = router;

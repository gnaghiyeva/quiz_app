const express = require('express');
const home_router = express.Router();
const QuizHomeController = require('../controllers/quizhome.controller')

//post Service
home_router.post('/',QuizHomeController.post)

//get All Service
home_router.get('/',QuizHomeController.getAll)

//get Service by ID
home_router.get('/:id',QuizHomeController.getById)

//delete Service
home_router.delete('/:id',QuizHomeController.delete)

//edit Service
home_router.put('/:id',QuizHomeController.edit)


module.exports = home_router
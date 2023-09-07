const express = require('express')
const category_router = express.Router()
const QuizCategoryController = require('../controllers/categories.controller')

//get All
category_router.get('/', QuizCategoryController.getAll)

//get By id
category_router.get('/:id', QuizCategoryController.getbyID)

//delete
category_router.delete("/:id", QuizCategoryController.delete)
//post
category_router.post("/", QuizCategoryController.post)

//edit
category_router.put("/:id", QuizCategoryController.edit)

module.exports = category_router
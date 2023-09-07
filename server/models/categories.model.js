const mongoose = require('mongoose')

const QuizCategory = mongoose.model("QuizCategory", new mongoose.Schema({
    categoryName:String,
    
}));

module.exports = QuizCategory
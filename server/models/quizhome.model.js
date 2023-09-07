const mongoose  = require ('mongoose')

const QuizHome = mongoose.model('QuizHome', new mongoose.Schema({
    image:String,
    title: String,
    description:String
}))

module.exports = QuizHome
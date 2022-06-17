import mongoose from "mongoose"

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    maxlength: 200,
  },
  answers: {
    type: Array,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
    maxlength: 50,
  },
})

QuestionSchema.methods.checkAnswer = function (givenAnswer) {
  console.log("givenAnswer", givenAnswer)
  console.log("this.correctAnswer", this.correctAnswer)
  return givenAnswer === this.correctAnswer
}

export default mongoose.model("Question", QuestionSchema)

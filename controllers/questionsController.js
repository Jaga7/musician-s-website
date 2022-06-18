import Question from "../models/Question.js"

const getQuestion = async (req, res) => {
  const projection = { question: 1, answers: 1 }

  let count = Math.floor(Math.random() * 3)
  let result = await Question.findOne({}, { question: 1, answers: 1 })
    .limit(-1)
    .skip(count)

  res.status(200).json({ result })
}

const answerQuestion = async (req, res) => {
  const question = await Question.findOne({
    question: req.query.question,
  })
  const result = question.checkAnswer(req.query.answer)
  res.status(200).json({ result })
}

export { getQuestion, answerQuestion }

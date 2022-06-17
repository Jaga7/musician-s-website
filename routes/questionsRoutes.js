import express from "express"
const router = express.Router()

import {
  getQuestion,
  answerQuestion,
} from "../controllers/questionsController.js"

router.route("/").post(answerQuestion).get(getQuestion)
// // place before :id
// router.route('/stats').get(showStats)
// router.route('/:id').delete(deleteJob).patch(updateJob)

export default router

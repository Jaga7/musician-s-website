import Question from "../models/Question.js"

import mongoose from "mongoose"
import moment from "moment"

const getQuestion = async (req, res) => {
  // const { search, status, jobType, sort } = req.query

  // const queryObject = {
  //   createdBy: req.user.userID,
  // }

  // if (status && status !== 'all') {
  //   queryObject.status = status
  // }
  // if (jobType && jobType !== 'all') {
  //   queryObject.jobType = jobType
  // }
  // if (search) {
  //   queryObject.position = { $regex: search, $options: 'i' }
  // }

  // NO AWAIT
  // let count = Question.countDocuments()
  // console.log("TO JEST COUNT: ", count)
  const projection = { question: 1, answers: 1 }
  let result = await Question.findOne({}, { question: 1, answers: 1 })
  console.log("TO JEST RESULT: ", result)

  // let result = await Question.find().limit(-1).skip(count).next()

  // if (sort === "latest") {
  //   result = result.sort("-createdAt")
  // }
  // if (sort === "oldest") {
  //   result = result.sort("createdAt")
  // }
  // if (sort === "a-z") {
  //   result = result.sort("position")
  // }
  // if (sort === "z-a") {
  //   result = result.sort("-position")
  // }

  // const page = Number(req.query.page) || 1
  // const limit = Number(req.query.limit) || 10
  // const skip = (page - 1) * limit
  // result = result.skip(skip).limit(limit)
  // const jobs = await result

  // const totalJobs = await Job.countDocuments(queryObject)
  // const numOfPages = Math.ceil(totalJobs / limit)

  res.status(200).json({ result })
  // .json({ question: { question: result.question }, answers: result.answers })
}

const answerQuestion = async (req, res) => {
  Question.checkAnswer(req.answer)
}
// const updateJob = async (req, res) => {
//   const { id: jobId } = req.params
//   const { company, position } = req.body

//   if (!company || !position) {
//     throw new BadRequestError("Please Provide All Values")
//   }

//   const job = await Job.findOne({ _id: jobId })

//   if (!job) {
//     throw new NotFoundError(`No job with id ${jobId}`)
//   }

//   // check permissions

//   checkPermissions(req.user, job.createdBy)

//   const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
//     new: true,
//     runValidators: true,
//   })

//   res.status(StatusCodes.OK).json({ updatedJob })
// }

// const deleteJob = async (req, res) => {
//   const { id: jobId } = req.params

//   const job = await Job.findOne({ _id: jobId })

//   if (!job) {
//     throw new CustomError.NotFoundError(`No job with id : ${jobId}`)
//   }

//   checkPermissions(req.user, job.createdBy)

//   await job.remove()
//   res.status(StatusCodes.OK).json({ msg: "Success! Job removed" })
// }

export { getQuestion, answerQuestion }

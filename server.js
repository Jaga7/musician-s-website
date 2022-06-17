import express from "express"
import dotenv from "dotenv"
dotenv.config()
import morgan from "morgan"

import { dirname } from "path"
import { fileURLToPath } from "url"
import path from "path"

import helmet from "helmet"
import xss from "xss-clean"
import mongoSanitize from "express-mongo-sanitize"

// const __dirname = dirname(fileURLToPath(import.meta.url))

// db
import connectDB from "./db/connect.js"

// routers
import questionsRouter from "./routes/questionsRoutes.js"

// middleware
import notFoundMiddleware from "./middleware/not-found.js"

const app = express()

// if (process.env.NODE_ENV !== 'production') {
//   app.use(morgan('dev'))
// }

// only when ready to deploy
// app.use(express.static(path.resolve(__dirname, './client/build')))

app.use(express.json())
// app.use(helmet())
// app.use(xss())
// app.use(mongoSanitize())

app.use("/api/v1/questions", questionsRouter)

// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
// })

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()

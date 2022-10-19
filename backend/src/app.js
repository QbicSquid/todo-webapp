require('dotenv').config() // must be called as early as possible
import express from 'express'
import cors from 'cors'
import { isCelebrateError } from 'celebrate'

import connectDB from './config/dbconnect'
import router from './routes/index.routes'
import makeResponse from './middleware/response'

const app = express()

app.use(cors()) // set up cross origin requests
app.use(express.json({ limit: '1mb' })) // parse json request bodies
app.use(express.urlencoded({ extended: true })) // parse url parameters

// routing
app.get('/', (req, res) =>
  res.status(200).json({ message: 'SimplyDo Server Up and Running' })
)
app.use('/api', router)

connectDB()

// error responses
app.use((err, req, res, next) => {
  if (isCelebrateError(err)) {
    for (const [key, value] of err.details.entries()) {
      return makeResponse({
        res,
        status: 422,
        message: value.details[0].message,
      })
    }
  } else if (err.name == 'MongoServerError' && err.code === 11000) {
    // error response for duplicate unique keys when inserting to db
    const key = Object.keys(err.keyValue)[0]
    return makeResponse({
      res,
      status: 400,
      message: `The ${key} ${err.keyValue[key]} is already taken`,
    })
  } else {
    // default error response
    return makeResponse({
      res,
      status: 500,
      message: 'Internal server error',
    })
  }
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`SimplyDo Server listening on port ${port}`)
})

require('dotenv').config() // must be called as early as possible
import express from 'express'
import cors from 'cors'

import connectDB from './config/dbconnect'
import router from './routes/index.routes'

const app = express()

app.use(cors()) // set up cross origin requests
app.use(express.json({ limit: '1mb' })) // parse json request bodies
app.use(express.urlencoded({ extended: true })) // parse url parameters

app.get('/', (req, res) =>
  res.status(200).json({ message: 'SimplyDo Server Up and Running' })
)
app.use('/api', router)

connectDB()

app.use((err, req, res, next) => {
  return makeResponse({
    res,
    status: 500,
    message: 'Internal server error',
  })
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`SimplyDo Server listening on port ${port}`)
})

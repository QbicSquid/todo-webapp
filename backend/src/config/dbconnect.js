import mongoose from 'mongoose'

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  mongoose
    .connect(process.env.MONGO_URI, { keepAlive: true, connectTimeoutMS: 3000 })
    .catch((error) => {
      console.log(`Initial connection to database failed: ${error}`)
    })

  mongoose.connection.on('connected', () => {
    console.log('Connected to database successfully')
  })

  mongoose.connection.on('error', (error) => {
    console.log(`Error connecting to database: ${error}`)
  })
}

export default connectDB

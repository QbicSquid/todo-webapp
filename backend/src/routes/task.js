import express from 'express'

import authorize from '../middleware/authorize'
import { createTask } from '../controllers/task'

const taskRouter = express.Router()

taskRouter.post('/create', authorize, createTask)

export default taskRouter

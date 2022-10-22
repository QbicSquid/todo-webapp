import express from 'express'
import { celebrate, Segments } from 'celebrate'

import { newTaskSchema, getTaskSchema, setTaskStatusSchema } from '../validations/task'
import { newTask, getTask, getTasks, removeTask, setTaskStatus } from '../controllers/task'

const taskRouter = express.Router()

taskRouter.get('/', getTasks)
taskRouter.get('/:id', celebrate({ [Segments.PARAMS]: getTaskSchema }), getTask)
taskRouter.post('/', celebrate({ [Segments.BODY]: newTaskSchema }), newTask)
taskRouter.put('/', celebrate({ [Segments.BODY]: setTaskStatusSchema }), setTaskStatus)
taskRouter.delete('/:id', celebrate({ [Segments.PARAMS]: getTaskSchema }), removeTask)

export default taskRouter

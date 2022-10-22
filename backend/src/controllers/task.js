import asyncHandler from '../middleware/async'
import makeResponse from '../middleware/response'
import { createTask, readTask, deleteTask, updateTask, readTasks } from '../database/task'

export const newTask = asyncHandler(async (req, res) => {
  const taskToCreate = req.body
  taskToCreate.user = req.user._id
  const task = await createTask(taskToCreate)
  makeResponse({ res, status: 201, message: 'Task created successfully', data: task })
})

export const getTask = asyncHandler(async (req, res) => {
  const task = await readTask(req.params.id)
  if (!task) makeResponse({ res, status: 404, message: 'Invalid task ID' })
  else makeResponse({ res, status: 200, message: 'Task fetched successfully', data: task })
})

export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await readTasks(req.params.id)
  makeResponse({ res, status: 200, message: 'Tasks fetched successfully', data: tasks })
})

export const removeTask = asyncHandler(async (req, res) => {
  const task = await deleteTask(req.params.id)
  if (!task) makeResponse({ res, status: 404, message: 'Invalid task ID' })
  else makeResponse({ res, status: 200, message: 'Task deleted successfully', data: task })
})

export const setTaskStatus = asyncHandler(async (req, res) => {
  const task = await updateTask(req.body.id, { done: req.body.done })
  if (!task) makeResponse({ res, status: 404, message: 'Invalid task ID' })
  else makeResponse({ res, status: 200, message: 'Task updated successfully', data: task })
})

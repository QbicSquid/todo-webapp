import Task from '../models/task'

export const createTask = async (task) => {
  task.done = false
  const taskToSave = new Task(task)
  return await taskToSave.save()
}

export const readTask = async (taskId) => {
  return await Task.findById(taskId, { lean: true })
}

export const deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId)
}

export const updateTask = async (taskId, fieldsToUpdate) => {
  return await Task.findByIdAndUpdate(taskId, fieldsToUpdate, { lean: true, new: true })
}
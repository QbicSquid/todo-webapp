import { Joi } from 'celebrate'

export const newTaskSchema = {
  task: Joi.string().required(),
  description: Joi.string().optional(),
}

export const getTaskSchema = {
  id: Joi.string().length(24).hex().required(),
}

export const setTaskStatusSchema = {
  id: Joi.string().length(24).hex().required(),
  done: Joi.boolean().required(),
}

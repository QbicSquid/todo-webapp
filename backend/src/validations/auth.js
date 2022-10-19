import { Joi } from 'celebrate'

export const registerSchema = {
  username: Joi.string().required(),
  password: Joi.string().required(),
}

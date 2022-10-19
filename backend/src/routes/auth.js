import express from 'express'
import { Segments, celebrate } from 'celebrate'

import { login, register } from '../controllers/auth'
import { registerSchema } from '../validations/auth'

const authRouter = express.Router()

authRouter.get('/login', login)
authRouter.post('/register', celebrate({ [Segments.BODY]: registerSchema }),register)

export default authRouter

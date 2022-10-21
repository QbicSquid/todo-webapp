import express from 'express'

import authorize from '../middleware/authorize'
import authRouter from './auth'
import taskRouter from './task'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/task', authorize, taskRouter)

export default router

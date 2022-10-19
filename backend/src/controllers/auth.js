import makeResponse from '../middleware/response'
import asyncHandler from '../middleware/async'
import { insertUser } from '../database/auth'

export const login = asyncHandler(async (req, res) => {
  return makeResponse({ res, status: 200, message: 'works' })
})

export const register = asyncHandler(async (req, res) => {
  await insertUser(req.body)
  return makeResponse({ res, status: 201, message: 'User registered successfully' })
})
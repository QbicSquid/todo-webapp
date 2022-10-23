import makeResponse from '../middleware/response'
import asyncHandler from '../middleware/async'
import { createToken } from '../utils/jwt'
import { insertUser, getUser } from '../database/auth'

export const login = asyncHandler(async (req, res) => {
  const user = await getUser({ username: req.body.username, fetchPassword: true })
  if (!user) return makeResponse({ res, status: 403, message: 'Incorrect username' })

  // TOD: implement hashed password comparison using bcrypt
  if (user.password != req.body.password) return makeResponse({ res, status: 403, message: 'Incorrect password' })

  delete user.password
  const token = createToken(user)
  return makeResponse({ res, status: 200, message: 'Login successful', data: { user, access_token: token } })
})

export const register = asyncHandler(async (req, res) => {
  const user = await insertUser(req.body)
  const token = createToken(user)
  return makeResponse({ res, status: 201, message: 'User registered successfully', data: { user, access_token: token } })
})
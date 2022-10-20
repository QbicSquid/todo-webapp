import asyncHandler from './async'
import makeResponse from './response'
import { decodeToken } from '../utils/jwt'
import { getUser } from '../database/auth'

const authorize = asyncHandler(async (req, res, next) => {
  // get the token fron headers if the header exists and is of type Bearer Token
  const token = req.headers.authorization
    ? req.headers.authorization.startsWith('Bearer')
      ? req.headers.authorization.split(' ')[1]
      : null
    : null

  if (!token) return makeResponse({ res, status: 403, message: 'Unauthorized' })

  const decodedUser = decodeToken(token).data
  const user = await getUser({ username: decodedUser.username, fetchPassword: false})

  if (!user) return makeResponse({ res, status: 403, message: 'Unauthorized' })

  req.user = user
  next()
})

export default authorize

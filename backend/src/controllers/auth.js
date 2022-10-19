import makeResponse from '../middleware/response'
import asyncHandler from '../middleware/async'

export const login = asyncHandler(async (req, res) => {
  return makeResponse({ res, status: 200, message: 'works' })
})

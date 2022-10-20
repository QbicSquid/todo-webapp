import asyncHandler from '../middleware/async'
import makeResponse from '../middleware/response'

export const createTask = asyncHandler(async (req, res) => {
  makeResponse({ res, status: 200, message: 'works', data: req.user })
})

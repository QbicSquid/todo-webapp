import mongoose from 'mongoose'

import User from '../models/user'

export const insertUser = async (user) => {
  const newUser = new User(user)
  const createdUser = await newUser.save()
  delete createdUser.password
  return createdUser
}

export const getUser = async ({ username, fetchPassword=false }) => {
  const user = await User.findOne({ username }).lean()
  if (!fetchPassword) delete user.password
  return user
}

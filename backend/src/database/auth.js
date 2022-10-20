import mongoose from 'mongoose'

import User from '../models/user'

export const insertUser = async (user) => {
  const newUser = new User(user)
  await newUser.save()
}

export const getUser = async ({ username, fetchPassword=false }) => {
  const user = await User.findOne({ username }).lean()
  if (!fetchPassword) delete user.password
  return user
}

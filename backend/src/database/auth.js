import mongoose from 'mongoose'

import User from '../models/user'

export const insertUser = async (user) => {
  const newUser = new User(user)
  await newUser.save()
}

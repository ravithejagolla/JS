
import {Schema,model}from 'mongoose'

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  role: String
})

export const User=model('User', userSchema)
import { Schema,model } from 'mongoose'
import argon2 from 'argon2'

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: v => /^\S+@\S+\.\S+$/.test(v),
      message: props => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, { timestamps: true })

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  try {
    this.password = await argon2.hash(this.password)
    next()
  } catch (err) {
    next(err)
  }
})

userSchema.methods.comparePassword = function (candidatePassword) {
  return argon2.verify(this.password, candidatePassword)
}

export const User = model('User', userSchema)

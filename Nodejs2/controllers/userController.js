
import { validationResult } from 'express-validator'
import { User } from '../models/userSchema.js'

export const registerUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
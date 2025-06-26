import env from 'dotenv'
env.config()
import jwt from 'jsonwebtoken'
import { addToBlacklist } from '../utils/balcklist.js'

export const login = (req, res) => {
  const { email } = req.body
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' })
  res.json({ token })
}

export const logout = (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (token) addToBlacklist(token)
  res.json({ message: 'Logged out successfully' })
}
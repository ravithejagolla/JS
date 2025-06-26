import jwt from 'jsonwebtoken'
import { isBlacklisted } from '../utils/blacklist.js'

export const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.sendStatus(401)
  if (isBlacklisted(token)) return res.status(401).json({ message: 'Token is blacklisted' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    res.sendStatus(403)
  }
}
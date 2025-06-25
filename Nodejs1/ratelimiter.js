const rateLimitMap = new Map()

export function rateLimiter(req, res, next) {
  const ip = req.ip
  const now = Date.now()
  const windowSize = 60 * 1000
  const limit = 10

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [])
  }

  const timestamps = rateLimitMap.get(ip).filter(ts => now - ts < windowSize)
  if (timestamps.length >= limit) {
    return res.status(429).json({ message: 'Rate limit exceeded' })
  }

  timestamps.push(now)
  rateLimitMap.set(ip, timestamps)
  next()
}

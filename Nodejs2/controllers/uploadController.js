
import csvParser from 'csv-parser'
import { Readable } from 'stream'
import { User } from '../models/userSchema.js'

export const uploadCSVHandler = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' })

  const results = []
  const readable = Readable.from(req.file.buffer)

  readable
    .pipe(csvParser())
    .on('data', (row) => {
      if (row.name && row.email) results.push(row)
    })
    .on('end', async () => {
      try {
        await User.insertMany(results)
        res.json({ message: 'CSV data imported successfully', count: results.length })
      } catch (err) {
        res.status(500).json({ message: 'Database error', error: err.message })
      }
    })
    .on('error', (err) => {
      res.status(400).json({ message: 'CSV parse error', error: err.message })
    })
}
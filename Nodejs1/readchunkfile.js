import fs from 'fs'
export function readFileInChunks(filePath, chunkSize, callback) {
  const stream = fs.createReadStream(filePath, { highWaterMark: chunkSize })
  stream.on('data', chunk => callback(chunk))
  stream.on('end', () => console.log('File read complete.'))
  stream.on('error', err => console.error('Read error:', err))
}

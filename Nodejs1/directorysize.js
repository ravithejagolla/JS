import { stat, readdir } from 'fs/promises'
import path from 'path'

export async function calculateDirSize(dirpath) {
  let totalSize = 0
  const items = await readdir(dirpath, { withFileTypes: true })
  for (const item of items) {
    const fullpath = path.join(dirpath, item.name)
    if (item.isDirectory()) {
      totalSize += await calculateDirSize(fullpath)
    } else if (item.isFile()) {
      const { size } = await stat(fullpath)
      totalSize += size
    }
  }

  return totalSize
}
const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Please provide a directory path.')
  process.exit(1)
}
const dirPath = args[0]
calculateDirSize(dirPath)
  .then(size => {
    console.log(`Total size of "${dirPath}": ${size} bytes`)
  })
  .catch(err => {
    console.error('Error calculating size:', err.message)
    process.exit(1)
  })

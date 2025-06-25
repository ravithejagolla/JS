import { copyFile } from 'fs/promises'
import path from 'path'

export async function backupFile(filePath) {
  const timestamp = new Date().toISOString().replace(/T/, '_').replace(/:/g, '-').replace(/\..+/, '')
  const dir = path.dirname(filePath)
  const ext = path.extname(filePath)
  const base = path.basename(filePath, ext)
  const backupName = `${base}_${timestamp}${ext}`
  const backupPath = path.join(dir, backupName)

  await copyFile(filePath, backupPath)
  return backupPath
}

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Please provide a file path to back up.')
  process.exit(1)
}

const inputPath = args[0]
backupFile(inputPath)
  .then((backupPath) => {
    console.log(`Backup created: ${backupPath}`)
  })
  .catch((err) => {
    console.error('Error during backup:', err.message)
    process.exit(1)
  })
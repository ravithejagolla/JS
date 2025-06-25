import fs from 'fs'

export function watchDirectory(dirPath, callback) {
  fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
    if (filename) {
      callback({ eventType, filename })
    }
  })
}

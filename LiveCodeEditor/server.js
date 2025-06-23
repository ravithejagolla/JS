import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { v4 as uuid } from 'uuid'

const app = express()
const server = http.createServer(app)
const io = new Server(server)
app.use(express.static('public'))

const rooms = new Map()

io.on('connection', (socket) => {
  let currentRoom = null
  const userID = uuid()

  socket.on('JOIN_ROOM', (roomID) => {
    currentRoom = roomID
    socket.join(currentRoom)

    if (!rooms.has(currentRoom)) {
      rooms.set(currentRoom, { code: '', users: new Map() })
    }

    const room = rooms.get(currentRoom)
    room.users.set(socket.id, { name: userID, cursorPos: null })

    socket.emit('SYNC_CODE',room.code)

    io.to(currentRoom).emit('USER_LIST', [...room.users.values()].map(u => u.name))
  })

  socket.on('CODE_CHANGE', (code) => {
    if (!currentRoom) return
    const room = rooms.get(currentRoom)
    room.code = code

    socket.to(currentRoom).emit('CODE_CHANGE', {
      code,
      from: userID,
    })
  })

  socket.on('CURSOR_MOVE', (position) => {
    if (!currentRoom) return
    const room = rooms.get(currentRoom)
    const user = room.users.get(socket.id)
    if (user) user.cursorPos = position

    socket.to(currentRoom).emit('CURSOR_MOVE', {
      from: userID,
      position,
    })
  })

  socket.on('disconnect', () => {
    if (!currentRoom) return
    const room = rooms.get(currentRoom)
    if (!room) return

    room.users.delete(socket.id)

    if (room.users.size === 0) {
      rooms.delete(currentRoom)
    } else {
      io.to(currentRoom).emit('USER_LIST', [...room.users.values()].map(u => u.name))
    }
  })
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})

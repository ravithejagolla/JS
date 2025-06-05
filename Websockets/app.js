
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(express.static('public'))
const server = http.createServer(app);
const io = new Server(server);

const rooms = {}; 

io.on('connection', (socket) => {
    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
        if (!rooms[roomId]) {
            rooms[roomId] = { users: new Set(), messages: [], doc: '' };
        }
        rooms[roomId].users.add(socket.id);
        socket.emit('chatHistory', rooms[roomId].messages);
        socket.emit('docUpdate', rooms[roomId].doc);
        io.to(roomId).emit('userCount', rooms[roomId].users.size);
        socket.to(roomId).emit('userJoined', 'A user joined the room');
        socket.on('sendMessage', (msg) => {
            const message = { text: msg, id: Date.now() };
            rooms[roomId].messages.push(message);
            io.to(roomId).emit('newMessage', message);
        });
        socket.on('editDoc', (content) => {
            rooms[roomId].doc = content;
            socket.to(roomId).emit('docUpdate', content);
        });
        socket.on('disconnect', () => {
            rooms[roomId]?.users.delete(socket.id);
            io.to(roomId).emit('userCount', rooms[roomId].users.size);
            socket.to(roomId).emit('userLeft', 'A user left the room');
            if (rooms[roomId]?.users.size === 0) {
                delete rooms[roomId];
            }
        });
    });
});

server.listen(3000,()=>{
    console.log("Server Running on http://localhost:3000")
})

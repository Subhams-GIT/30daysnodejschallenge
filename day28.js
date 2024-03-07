// server.js
const express=require('express')
const createServer=require('http')
const http = require('http');
const socketIo =require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


io.on('connection', (socket) => {
    console.log('Client connected')
    socket.on('message', (message) => {
        io.emit('message', message);
    });
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});


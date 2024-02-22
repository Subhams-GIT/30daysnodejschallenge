const express = require('express');
const { createServer } = require('http');
const path=require('path')
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


io.on('connection', (device) => {
    console.log('connected');
    device.on('messege',(messege) => {
        console.log('message: ' + messege);
    });
    device.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(3000);

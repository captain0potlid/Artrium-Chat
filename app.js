const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);
const socketIO = require('socket.io');

const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));
const PORT = process.env.PORT || 8080;


io.on('connection', (socket) => { // if anybody connects to the server
    socket.on('chat', (data) => { // if anybody send 
        io.emit('chat', data) // process msg from server
    })
});

server.listen(PORT, () => console.log(`server is running on ${PORT}`))
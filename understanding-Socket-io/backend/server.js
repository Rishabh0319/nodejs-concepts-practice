import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ["GET", "POST"],
        credentials: true
    }
});


// receive request from WS client
io.on('connection', (socket) => {
    console.log(`new User Connected ID: ${socket.id}`);

    socket.on('messege', (receiveMsgData) => {
        console.log(receiveMsgData);
    });

});

app.get('/', (req, res) => {
    res.send('Server is Ready');
});

server.listen(port, () => {
    console.log(`Server is Running on Port: ${port}`);
});










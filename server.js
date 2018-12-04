const io = require('socket.io')(3001);

io.on('connection', function(socket) {
    console.log('Controller: Connection received')

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});
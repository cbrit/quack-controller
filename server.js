const io = require('socket.io')(3001);

const qtime = require('./lib/qtime.js')

io.on('connection', function(socket) {
    console.log('Controller: Connection received')

    socket.on('chat message', function(content) {
        var message = qtime.timestamp() + ": " + content;

        io.emit('chat message', message);
    });
});
'use strict';

let io = require('socket.io')();

io.sockets.on('connection', function(socket) {
  socket.on('create', function(room) {
    socket.join(room);
  });
});

const io = require('socket.io')(8080);

const DB = {
    messages: []
};

let id = 1;
io.on('connection', (socket) => {
  socket.emit('connection', DB.messages);
  socket.on('message', (data) => {
    const d = data;
    d.id = id += 1;
    d.date = Date.now();
    DB.messages.push(data);
    io.emit('message', data);
  });
});

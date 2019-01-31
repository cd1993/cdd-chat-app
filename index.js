var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();

// Create server
const port = 182;
var server = app.listen(port, function() {
    console.log(`Listening to requests on port ${port}..`);
    
});

// Static files
app.use(express.static('public'));

// Set up Socket
var io = socket(server);

// Listen for connection on the sockets. When a client connects to the server, the connection is made
io.on('connection', function(socket) {
    console.log(`Socket ( ${socket.id} ) connected.`);
});
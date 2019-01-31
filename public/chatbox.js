// Make connection on the frontend
let socket = io.connect('http://localhost:182');

// Query DOM for inputs
let message = document.getElementById('chat-message'),
    username = document.getElementById('chat-username'),
    sendButton = document.getElementById('chat-send'),
    chatOutput = document.getElementById('chat-output');

// Emit an event when user clicks send
sendButton.addEventListener('click', (event) => {
  socket.emit('chatMessage', { // Emit the message to the backend
    message: message.nodeValue,
    username: username.value
  }); 
});
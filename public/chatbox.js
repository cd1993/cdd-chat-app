// Make connection on the frontend
let socket = io.connect('http://localhost:182');

// Query DOM for inputs
let message = document.getElementById('chat-message'),
    username = document.getElementById('chat-username'),
    chatOutput = document.getElementById('chat-output'),
    chatForm = document.getElementById('chat-form');

// Emit an event when user clicks send
chatForm.submit ( (event) => {
  event.preventDefault();

  socket.emit('chatMessage', { // Emit the message to the backend
    message: message.nodeValue,
    username: username.value
  }); 

  chatForm.reset();
});
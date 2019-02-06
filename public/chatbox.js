

function handleChat() {
  // Make connection on the frontend
  var socket = io.connect('http://localhost:182');

  // Query DOM for inputs
  var message = document.getElementById('chat-message'),
      username = document.getElementById('chat-username'),
      chatOutput = document.getElementById('chat-output'),
      chatForm = document.getElementById('chat-form'),
      sendButton = document.getElementById('chat-send');
  
  // Emit an event when user clicks send
  sendButton.addEventListener('click', function(event) {
    event.preventDefault();
  
    socket.emit('chatMessage', { // Emit the message to the backend. Now we need to handle the data on the backend
      message: message.value,
      username: username.value
    }); 
  });  
}
/* Run handleChat function on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', handleChat());






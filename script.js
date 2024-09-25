//CHAT BOX
/*
function formatTime(timestamp) {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const secondsAgo = Math.floor((now - messageTime) / 1000);
    
    let timeAgo;

    if (secondsAgo < 60) {
        timeAgo = secondsAgo + " seconds ago";
    } else if (secondsAgo < 3600) {
        const minutesAgo = Math.floor(secondsAgo / 60);
        timeAgo = minutesAgo + " minutes ago";
    } else if (secondsAgo < 86400) {
        const hoursAgo = Math.floor(secondsAgo / 3600);
        timeAgo = hoursAgo + " hours ago";
    } else if (secondsAgo < 2592000) { // Less than 30 days
        const daysAgo = Math.floor(secondsAgo / 86400);
        timeAgo = daysAgo + " days ago";
    } else if (secondsAgo < 31536000) { // Less than a year
        const monthsAgo = Math.floor(secondsAgo / 2592000);
        timeAgo = monthsAgo + " months ago";
    } else {
        const yearsAgo = Math.floor(secondsAgo / 31536000);
        timeAgo = yearsAgo + " years ago";
    }

    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const dateString = messageTime.toLocaleDateString('en-GB', options);
    const timeString = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return ` ${dateString}  ${timeAgo}`;
}

function displayMessages() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ''; // Clear current messages
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    messages.forEach(msg => {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        textContainer.className = 'message-div';
        textContainer.innerHTML = `<i class="fas fa-user"></i> ${msg.text}`;

        const timestampContainer = document.createElement('div');
        timestampContainer.className = 'timestamp-container';
        timestampContainer.className = 'time-style';
        timestampContainer.innerHTML = `<span class="timestamp">${formatTime(msg.timestamp)}</span>`;
        
        
        messageContainer.appendChild(timestampContainer);
        messageContainer.appendChild(textContainer);
        chatBox.appendChild(messageContainer);
    });
}

// Function to send messages
document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();

    if (message) {
        const chatBox = document.getElementById('chat-box');
        const timestamp = new Date().toISOString();

        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ text: message, timestamp: timestamp });
        localStorage.setItem('messages', JSON.stringify(messages));

        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        

        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        textContainer.className = 'message-div';
        textContainer.innerHTML = `<i class="fas fa-user"></i> ${message}`;

        const timestampContainer = document.createElement('div');
        timestampContainer.className = 'timestamp-container';
        timestampContainer.className = 'time-style';
        timestampContainer.innerHTML = `<span class="timestamp">${formatTime(timestamp)}</span>`;
        

        messageContainer.appendChild(timestampContainer);
        messageContainer.appendChild(textContainer);
        chatBox.appendChild(messageContainer);

        input.value = '';
        document.getElementById('error-message').textContent = ''; // Clear any error message

        chatBox.scrollTop = chatBox.scrollHeight;
    } else {
        document.getElementById('error-message').textContent = '*Please fill this message'; // Show error message
    }
});

// Allow sending message with Enter key
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

// Load messages when the page loads
window.onload = displayMessages;

// Function to delete all messages
// Function to delete all messages
document.getElementById('delete-button').addEventListener('click', function() {
    localStorage.removeItem('messages'); // Clear messages from localStorage
    displayMessages(); // Refresh the chat box
});
*/
//for livechat bot
// script.js

// Toggle chat box visibility
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const closeBtn = document.getElementById('close-btn');

chatToggle.addEventListener('click', () => {
  chatContainer.classList.add('open');
  chatToggle.style.display = 'none'; // Hide the button when chat opens
});

closeBtn.addEventListener('click', () => {
  chatContainer.classList.remove('open');
  chatToggle.style.display = 'block'; // Show the button when chat closes
});

// Handle sending messages
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const inputField = document.getElementById('chat-input');
  const message = inputField.value.trim();

  if (message !== '') {
    // Append user's message
    appendMessage('user', message);
    inputField.value = '';

    // Provide a static bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      appendMessage('bot', botResponse);
    }, 1000); // Simulate a delay for bot response
  }
}

function appendMessage(sender, text) {
  const chatOutput = document.getElementById('chat-output');
  const messageElement = document.createElement('div');

  messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.textContent = text;

  chatOutput.appendChild(messageElement);
  chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the latest message
}

// Static bot responses based on input
function getBotResponse(message) {
  const lowercaseMessage = message.toLowerCase();

  if (lowercaseMessage.includes('hello')) {
    return 'Hello! How can I assist you today?';
  } else if (lowercaseMessage.includes('help')) {
    return 'Sure! I am here to help. What do you need assistance with?';
  } else if (lowercaseMessage.includes('bye')) {
    return 'Goodbye! Have a great day!';
  } else {
    return 'I am not sure how to respond to that. Can you please clarify?';
  }
}

//specila offers

  
//special offers end
//CHAT BOX

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

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = messageTime.toLocaleDateString('en-GB', options);
    const timeString = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return `${timeAgo} (sent on ${dateString} at ${timeString})`;
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
        textContainer.innerHTML = `<i class="fas fa-user"></i> ${msg.text}`;

        const timestampContainer = document.createElement('div');
        timestampContainer.className = 'timestamp-container';
        timestampContainer.innerHTML = `<span class="timestamp">${formatTime(msg.timestamp)}</span>`;
        
        messageContainer.appendChild(textContainer);
        messageContainer.appendChild(timestampContainer);
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
        textContainer.innerHTML = `<i class="fas fa-user"></i> ${message}`;

        const timestampContainer = document.createElement('div');
        timestampContainer.className = 'timestamp-container';
        timestampContainer.innerHTML = `<span class="timestamp">${formatTime(timestamp)}</span>`;

        messageContainer.appendChild(textContainer);
        messageContainer.appendChild(timestampContainer);
        chatBox.appendChild(messageContainer);

        input.value = '';
        document.getElementById('error-message').textContent = ''; // Clear any error message

        chatBox.scrollTop = chatBox.scrollHeight;
    } else {
        document.getElementById('error-message').textContent = 'Please fill this message'; // Show error message
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
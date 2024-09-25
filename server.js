/*const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');*/

//for live chatbot
// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize app and server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle new WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Broadcast messages to all clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // When a user disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//

/*
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email service
    auth: {
        user: 'sudheer.kkdigitalgrowth@gmail.com', // your email
        pass: 'sudheerkkdigital', // your email password
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'sudheer.kkdigitalgrowth@gmail.com',
        to: email,
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/
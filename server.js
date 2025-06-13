const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// REST API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Optional: handle POST request
app.post('/api/echo', (req, res) => {
  const { text } = req.body;
  res.json({ echoed: text });
});

// Default route for HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
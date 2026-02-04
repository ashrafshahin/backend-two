const express = require('express');
const app = express();
const port = 3000;

// 1. A route that simulates an error
app.get('/error-route', (req, res, next) => {
    // Simulate an error
    const err = new Error('Something went wrong on the error route');
    next(err); // Pass the error to the error-handling middleware
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Server');
});

// 2. Custom error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack to the console
    res.status(500).send('Something broke! We are experiencing an internal server error.'); // Send a generic error response to the client
});

// 3. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
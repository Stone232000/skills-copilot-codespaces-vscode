// Create web server 
// 1. Create web server
// 2. Create a route for POST /comments
// 3. Create a route for GET /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

// 1. Create web server
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

// 2. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.status(201).send('POST /comments');
});

// 3. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 4. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// 6. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Run the server
// node comments.js
// Open the browser and go to http://localhost:3000/comments
// Open Postman and send a POST request to http://localhost:3000/comments
// Open Postman and send a GET request to http://localhost:3000/comments
// Open Postman and send a GET request to http://localhost:3000/comments/1
// Open Postman and send a PUT request to http://localhost:3000/comments/1
// Open Postman and send a DELETE request to http://localhost:3000/comments/1
// Open Postman and send a GET request to http://localhost:3000/comments
// Open Postman and send a POST request to http://localhost:3000/comments
// Open Postman and send a GET request to http://localhost:3000/comments
// Open Postman and send a GET request
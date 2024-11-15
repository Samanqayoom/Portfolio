require('dotenv').config();  // Load environment variables
const express = require('express');
const connectDB = require('./config/db');  // Import the MongoDB connection

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Import the central router (index.routes.js)
const indexRoutes = require('./routes/index.routes');

// Use the central routes file
app.use('/', indexRoutes);  // All routes from index.routes.js will be handled here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


/*const express = require('express');
const app = express();
const port = 3000;

// Use middleware to parse JSON bodies
app.use(express.json());

// In-memory store for users (simulating a database)
let users = [];

// CREATE - Add a new user
app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    
    // Simple validation to ensure all fields are provided
    if (!id || !name || !email) {
        return res.status(400).json({ message: "Missing required fields: id, name, email" });
    }
    
    const newUser = { id, name, email };
    users.push(newUser);
    
    return res.status(201).json(newUser);
});

// READ - Get all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// READ - Get a user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
    res.status(200).json(user);
});

// UPDATE - Update a user's data by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
    const { name, email } = req.body;
    
    // Update user fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    
    res.status(200).json(user);
});

// DELETE - Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    
    const deletedUser = users.splice(index, 1);
    
    res.status(200).json({ message: "User deleted", user: deletedUser[0] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




/*const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});*/




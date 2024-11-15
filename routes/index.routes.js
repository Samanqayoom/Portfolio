// routes/index.routes.js

const express = require('express');
const router = express.Router();

// Import individual route files
const authRoutes = require('./auth.routes');
// Add any other routes here, e.g., projects.routes, experience.routes, etc.

// Mount the route files
router.use('/auth', authRoutes);  // All routes starting with /auth will go to auth.routes.js

// You can add more routes here if needed, e.g.:
// const projectRoutes = require('./project.routes');
// router.use('/projects', projectRoutes);

// Example: basic route for the homepage
router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Export the router to be used in app.js
module.exports = router;
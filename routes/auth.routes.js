// auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controllers');
const { verifyToken } = require('../middlewares/auth.middlewares');

// User Routes
router.post('/signup', authController.signup);

router.post('/login', authController.login);
/*
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.post('/verify-password', authController.verifyPassword);

// User Info Routes (protected)
router.get('/get-users', verifyToken, authController.getUsers);
router.get('/get-user-by-id/:id', verifyToken, authController.getUserById);
router.get('/get-current-user', verifyToken, authController.getCurrentUser);*/

module.exports = router;
// auth.services.js
const bcrypt = require('bcryptjs');
const User = require('../models/users');  // Import your User model

exports.signup = async (userData) => {
  const { email,firstName, lastName, intro, about, professional,password } = userData;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user instance with the provided data
  const newUser = new User({
    email,
    firstName,
    lastName,
    intro,
    about,
    professional,
    password: hashedPassword,  // Store the hashed password
  });

  // Save the user to the database
  await newUser.save();

  return newUser;  // Return the created user
};


// Login existing user
exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
  return token;
};
/*

// Handle password reset (forgot password)
exports.forgotPassword = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const resetToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  await sendPasswordResetEmail(user.email, resetToken);
};

// Reset password with the token
exports.resetPassword = async (token, newPassword) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);gi
    if (!user) throw new Error('User not found');

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

// Verify user's password
exports.verifyPassword = async (userId, currentPassword) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  return await bcrypt.compare(currentPassword, user.password);
};

// Get all users
exports.getUsers = async () => {
  return await User.find({});
};

// Get user by ID
exports.getUserById = async (userId) => {
  return await User.findById(userId);
};

// Get current logged-in user
exports.getCurrentUser = async (userId) => {
  return await User.findById(userId);
};*/

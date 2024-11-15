// utils/passwordUtils.js
const bcrypt = require('bcryptjs');

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

exports.comparePasswords = async (inputPassword, storedPassword) => {
  return await bcrypt.compare(inputPassword, storedPassword);
};
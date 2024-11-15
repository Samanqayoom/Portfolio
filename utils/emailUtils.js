// utils/emailUtils.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendPasswordResetEmail = async (email, token) => {
  const resetUrl = '${process.env.CLIENT_URL}/reset-password?token=${token}';
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset',
    html:`<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
  });
};
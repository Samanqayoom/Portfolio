const authService = require('../services/auth.services');
exports.signup = async (req, res) => {
  try {
    // Destructure all fields from the request body
    const { email,firstName, lastName, intro, about,professional,password} = req.body;

    // Check if any of the required fields are missing
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    // Call the signup service to handle user creation
    const user = await authService.signup({
      email,
      password,
      firstName,
      lastName,
      intro,
      about,
      professional
    });

    // Return a successful response with the created user
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    // Return an error response in case of failure
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

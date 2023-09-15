import User from '../userModel.js';

export const userLogin = async (req, res) => {
    res.status(200).json({ message: 'User logged in' });
  };

export const registerUser = async (req, res) => {
    try {
        // Extract user data from the request body
        const {
          firstName,
          otherName,
          lastName,
          userName,
          password,
          telephone,
          gender,
          dateOfBirth,
          email,
          location,
          profilePicUrl,
        } = req.body;
    
        // Create a new user document
        const newUser = new User({
          firstName,
          otherName,
          lastName,
          userName,
          password, // Hey, Daniel, what hashing algorithm are we using here?
          telephone,
          gender,
          dateOfBirth,
          email,
          location,
          profilePicUrl,
        });
    
        // Save the user to the database
        await newUser.save();
        console.log(`User: ${newUser.firstName} has been created`);
        res.status(201).json({ message: "User registered successfully" });
      } catch (error) {
        // Handle any errors that occur during registration
        console.log(`Failed to create user`);
        res.status(500).json({ error: "Registration failed" });
      }

}

export const getUserById = async (req, res) => {
    res.status(200).json({ message: 'User fetched!' });
}

export const editUserDetails = async (req, res) => {
    res.status(200).json({ message: 'User details updated!' });
}

export const deleteUser = async (req, res) => {
    res.status(200).json({ message: 'User deleted successfully!' });
}
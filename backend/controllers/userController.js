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
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
          res.status(404).json({error: 'User not found'});
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

export const editUserDetails = async (req, res) => {
    const userId = req.params.id;
    const { userName, telephone, gender, location, profilePicUrl } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ error: 'Book not found' });
        }
        if (userName) user.userName = userName;
        if (telephone) user.telephone = telephone;
        if (gender) user.gender = gender;
        if (location) {
            if (location.address) user.location.address = location.address;
            if (location.city) user.location.city = location.city;
            if (location.country) user.location.country = location.country;
        };
        if (profilePicUrl) user.profilePicUrl = profilePicUrl;
        user.save();
        console.log(`User ${user.id} updated successfully!`);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id);
        if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully!' });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(!users) {
          res.status(404).json({error: 'Users not found!'})
        }
        console.log(users);
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}
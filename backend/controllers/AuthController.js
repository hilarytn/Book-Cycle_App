import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const {
      username, email, password, firstName, lastName, phoneNumber, address,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      address,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Login a user
// @route   POST /api/auth/login
// @access  Public

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE },
    );

    const refreshToken = jwt.sign(
      { email: user.email, id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRE },
    );

    res.status(200).json({ result: user, token, refreshToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Refresh token
// @route   POST /api/auth/refresh-token
// @access  Public

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(403).json({ message: 'Access denied. No token provided' });
    }

    const decoded = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    if (!decoded.id) {
      return res.status(403).json({ message: 'User ID not found in the token' });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(403).json({ message: 'User not found' });
    }

    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE },
    );

    res.json({ accessToken });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    res.status(401).json({ error: error.message });
  }
};

// @desc    retrieve user info
// @route   GET /api/auth/user
// @access  Private

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    update user info
// @route   PUT /api/auth/user
// @access  Private

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const {
      username, email, firstName, lastName, phoneNumber, address,
    } = req.body;
    user.username = username || user.username;
    user.email = email || user.email;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.address = address || user.address;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    update user password
// @route   PUT /api/auth/user/password
// @access  Private

export const updateUserPassword = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword || user.password;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    delete user
// @route   DELETE /api/auth/user
// @access  Private

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    get all users
// @route   GET /api/auth/users
// @access  Private

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ message: 'Users not found' });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

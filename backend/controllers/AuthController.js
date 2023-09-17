import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, phoneNumber, address } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            phoneNumber,
            address
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error: error.message});
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
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { email: user.email, id: user._id }, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
             );

        const refreshToken = jwt.sign(
            { email: user.email, id: user._id },
            process.env.REFRESH_TOKEN_SECRET, 
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
            );

        res.status(200).json({ result: user, token, refreshToken });
    } catch (error) {
        res.status(500).json({error: error.message});   
    }
};

// @desc    Refresh token
// @route   POST /api/auth/refresh-token
// @access  Public

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;

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
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRE}
        );

    res.json({ accessToken });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    res.status(401).json({ error: error.message });
  }
};


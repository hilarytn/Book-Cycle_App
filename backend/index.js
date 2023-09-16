import express from 'express';
import userRoutes from './routes/user.js';
//import {registerUser, userLogin} from './controllers/AuthController.js';
//import { createUser } from './controllers/userController.js';
//const express = require('express');

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(['/api/user/', '/api/users/'], userRoutes);

app.get('/', (req, res) => {
    res.send('Home Page, Welcome!');
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
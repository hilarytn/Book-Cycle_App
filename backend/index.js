import express from 'express';
import userRoutes from './routes/user.js';
import users from './routes/miniDB.js';
import { createUser } from './controllers/user.js';
//const express = require('express');

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Home Page, Welcome!');
})

app.get('/users', (req, res) => {
    console.log(users);
    res.json(users);
})


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

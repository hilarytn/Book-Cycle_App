import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import connectDB from './config/db.js';
import User from './userModel.js';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Home Page, Welcome!');
})

app.get('/api/users', async (req, res) => {
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
})


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
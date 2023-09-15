import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(['/api/user', '/api/users'], userRoutes);
//app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Home Page, Welcome!');
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import userRoutes from './routes/user.js';
import bookRoutes from './routes/books.js';
import connectDB from './config/db.js';

// Load environment variables from the .env file into process.env
dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.send('Home Page, Welcome!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

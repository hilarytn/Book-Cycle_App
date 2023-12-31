import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import bookRoutes from './routes/books.js';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import swapRoutes from './routes/swap.js';
import messageRoutes from './routes/message.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', swapRoutes);
app.use('/api', messageRoutes);

app.get('/', (req, res) => {
  res.send('Home Page, Welcome! to Book-Cycle App - API');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

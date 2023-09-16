import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import bookRoutes from './routes/books.js';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';


dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', bookRoutes);


app.get('/', (req, res) => {
  res.send('Home Page, Welcome! to Book-Cycle App - API');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

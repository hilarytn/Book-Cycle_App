import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import bookRoutes from './routes/books.js';

// Load environment variables from the .env file into process.env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.send('Home Page, Welcome!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

import express from 'express';
import userRoutes from './routes/user.js';
import bookRoutes from './routes/books.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.send('Home Page, Welcome!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import bookRoutes from './routes/books.js';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import swapRoutes from './routes/swap.js';
import Message from './models/Message.js';

// websocket imports
import { Server } from 'socket.io';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', swapRoutes);

app.get('/', (req, res) => {
  res.send('Home Page, Welcome! to Book-Cycle App - API');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// web socket configuration
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('New Client Connected');

  socket.on('message', async (data) => {
    console.log(data);

    // save message to database
    const message = new Message(data);
    await message.save();

    // io.emit('message', data);

    // send message to specific room
    io.to(data.room).emit('message', data);
  });

  socket.on('join', (data) => {
    console.log(data);
    socket.join(data.room);
  });

  socket.on('disconnect', () => {
    console.log('Client Disconnected');
  });
});

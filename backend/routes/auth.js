import express from 'express';
const router = express.Router();

import { registerUser } from '../controllers/AuthController.js';

router.post('/registerUser', registerUser);

export default router; 
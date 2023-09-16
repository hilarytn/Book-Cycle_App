import express from 'express';
const router = express.Router();

import { register } from '../controllers/AuthController.js';

router.post('/user/register', register);

export default router; 
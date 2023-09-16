import express from 'express';
const router = express.Router();

import { register, login, refreshToken } from '../controllers/AuthController.js';

router.post('/user/register', register);
router.post('/user/login', login);
router.post('/user/refresh-token', refreshToken);

export default router; 
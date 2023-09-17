import express from 'express';
const router = express.Router();

import {
    register,
    login,
    refreshToken,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    updateUserPassword
} from '../controllers/AuthController.js';

router.post('/user/register', register);
router.post('/user/login', login);
router.post('/user/refresh-token', refreshToken);
router.get('/user/:id', getUser);
router.get('/users', getUsers);
router.put('/user/:id', updateUser);
router.put('/user/password/:id', updateUserPassword);
router.delete('/user/:id', deleteUser);

export default router; 
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
    updateUserPassword,
    logout
} from '../controllers/AuthController.js';
import { authenticate } from '../middleware/authenticate.js';
import upload from '../middleware/fileUpload.js';

router.post('/user/register', upload.single('profilePictureUrl'), register);
router.post('/user/login', login);
router.post('/user/refresh-token', refreshToken);
router.get('/user/:id', authenticate, getUser);
router.get('/users', authenticate, getUsers);
router.put('/user/:id', authenticate, upload.single('profilePictureUrl'), updateUser);
router.put('/user/password/:id',authenticate, updateUserPassword);
router.delete('/user/:id', authenticate, deleteUser);
router.post('/user/logout', authenticate, logout);

export default router;

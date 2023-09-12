import express from 'express';
import {
  createUser,
  getUserById,
  editUserDetails,
  deleteUser,
} from '../controllers/user.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.patch('/user/:id', editUserDetails);
router.delete('user/:id', deleteUser);

export default router;

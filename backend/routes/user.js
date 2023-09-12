import express from 'express';
import { createUser, getUserById, editUserDetails, deleteUser } from '../controllers/user.js';

const router = express.Router();


router.get('/', (req, res) => res.send("Coming soon!"));

router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', editUserDetails);
router.delete('/:id', deleteUser);

export default router;
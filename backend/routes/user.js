import express from 'express';
import { registerUser, getUserById, editUserDetails, deleteUser } from '../controllers/userController.js';

const router = express.Router();


router.get('/', (req, res) => res.send("Coming soon!"));

router.post('/', registerUser);
router.get('/:id', getUserById);
router.patch('/:id', editUserDetails);
router.delete('/:id', deleteUser);

export default router;
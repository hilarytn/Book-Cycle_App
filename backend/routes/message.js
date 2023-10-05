import express from 'express';
import { authenticate } from '../middleware/authenticate.js';

import {
    createMessage,
    getMessages
} from '../controllers/MessageController.js';

const router = express.Router();

router.post('/chat', createMessage);
router.get('/chat/:user1Id/:user2Id', getMessages);

export default router;


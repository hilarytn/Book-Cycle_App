import express from 'express';
import users from './miniDB.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', (req, res) => res.send("Coming soon!"));

router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()});
    res.send(`User with the name ${user.name} has been successfully created!`)
    console.log(`User with the name ${user.name} has been successfully created!`);
});

export default router;
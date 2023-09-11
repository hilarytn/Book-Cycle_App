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

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
    console.log(`User found: ${foundUser}`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const {
        name,
        username,
        gender,
        dob,
        address,
        email,
        telephone,
    } = req.body;

    const user = users.find((user) => user.id == id);
    if (name) user.name = name;
    if (username) user.username = username;
    if (gender) user.gender = gender;
    if (dob) user.dob = dob;
    if (address) user.address = address;
    if (email) user.email = email;
    if (telephone) user.telephone = telephone;

    res.send(`Success, User ${id} updated!`);
    console.log(`Success, User ${id} updated!`);
})

export default router;
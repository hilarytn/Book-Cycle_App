import express from 'express';
import {
    registerUser,
    userLogin } from '../controllers/AuthController'
import {
    getUserById,
    editUserDetails,
    deleteUser,
    getAllUsers
} from '../controllers/userController.js';

const router = express.Router();

/**
 * User Login.
 *
 * @route GET /login
 * @returns {object} The user's login page.
 */
router.get('/login', userLogin);

/**
 * Homepage.
 *
 * @route GET /
 * @returns {object} Fetches all users.
 */
router.get('/', getAllUsers);

/**
 * Register a new user.
 *
 * @route POST /
 * @param {object} req.body - The user's registration information.
 * @returns {object} The newly registered user.
 * @throws {Error} If registration fails or an error occurs.
 */
router.post('/', registerUser);

/**
 * Get a specific user by ID.
 *
 * @route GET /:id
 * @param {string} id - The id of the user to retrieve.
 * @returns {object} The user.
 * @throws {Error} If the user is not found or an error occurs.
 */
router.get('/:id', getUserById);

/**
 * Edit user details.
 *
 * @route PATCH /:id
 * @param {string} id - The id of the user to edit.
 * @param {object} req.body - The updated user details.
 * @returns {object} The updated user.
 * @throws {Error} If editing the user details fails or an error occurs.
 */
router.patch('/:id', editUserDetails);

/**
 * Delete a user by ID.
 *
 * @route DELETE /:id
 * @param {string} id - The id of the user to delete.
 * @returns {object} A message indicating successful user deletion.
 * @throws {Error} If user deletion fails or an error occurs.
 */
router.delete('/:id', deleteUser);

export default router;
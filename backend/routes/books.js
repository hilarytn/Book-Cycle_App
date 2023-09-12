import express from 'express';

const router = express.Router();

/**
 * Module to handle routes about books operations
 *
 */

/**
 * Get a list of all books
 * @route GET /books
 * @returns {object} List of books
 * @throws {Error} If an error occurs
 */
router.get('/books', (req, res) => {
  res.send('Get all books');
});

/**
 * Get a specific book by ID.
 *
 * @route GET /books/:id
 * @param {string} id - The id of the book to retrieve.
 * @returns {object} The book.
 * @throws {Error} If the book is not found or an error occurs.
 */
router.get('/:id', (req, res) => {
  res.send('Book is found');
});

/**
 * Create a new book.
 *
 * @route POST /books
 * @param {object} req.body - The book data to create.
 * @returns {object} The created book.
 * @throws {Error} If the request is invalid or an error occurs.
 */
router.post('/', (req, res) => {
  res.send('created a book successfully');
});

/**
 * Update a specific book by ID.
 *
 * @route PUT /books/:id
 * @param {string} id - The ID of the book to update.
 * @param {object} req.body - The updated book data.
 * @returns {object} The updated book.
 * @throws {Error} If the book is not found, the request is invalid, or an error occurs.
 */
router.put('/books/:id', (req, res) => {
  res.send('updated the book succesfully');
});

/**
 * Delete a specific book by ID.
 *
 * @route DELETE /books/:id
 * @param {string} id - The ID of the book to delete.
 * @returns {void}
 * @throws {Error} If the book is not found or an error occurs.
 */
router.delete('/books/:id', (req, res) => {
  res.send('deleted a book succesfully');
});

export default router;

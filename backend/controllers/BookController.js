import path from 'path';
import Book from '../models/Book.js';

export const createBook = async (req, res) => {
  try {
    const {
      title, author, genre, description, condition, availabilityStatus,
    } = req.body;
    const existingBook = await Book.findOne({ title });

    if (existingBook) {
      return res.status(400).json({ error: 'Book already exists' });
    }

    let coverArtUrl = '';

    if (req.file) {
      coverArtUrl = req.file.path;
    }
    const book = new Book({
      title,
      author,
      genre,
      description,
      condition,
      availabilityStatus,
      coverArtUrl,
      //owner: req.user._id,
    });

    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const searchQuery = req.query.search;

    const searchOptions = {
      page,
      limit,
      populate: 'owner',
      sort: { createdAt: -1 },
    };
    const query = {};

    if (searchQuery) {
      query.$or = [
        { title: { $regex: searchQuery, $options: 'i' } },
        { author: { $regex: searchQuery, $options: 'i' } },
        { genre: { $regex: searchQuery, $options: 'i' } },
      ];
    }
    const result = searchQuery ? await Book.paginate(query, searchOptions) : await Book.paginate({}, searchOptions);
    res.status(200).json(
      {success: true,
      message: "Books fetched successfully",
      data: result});
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

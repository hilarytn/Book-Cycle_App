import Book from "../models/Book.js";
import path from "path";

export const createBook = async (req, res) => {
  try {
        const { title, author, genre, description, condition, availabilityStatus } = req.body;
        const existingBook = await Book.findOne({ title });

        if (existingBook) {
          return res.status(400).json({ error: 'Book already exists' });
        }
        if(req.file) {
          const coverArtUrl = req.file.path;
        }
        const book = new Book({
          title,
          author,
          genre,
          description,
          condition,
          availabilityStatus,
          coverArtUrl,
          owner: req.user._id,
        });

        const savedBook = await book.save();
        res.status(201).json(savedBook);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    };

export const getAllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const options = {
      page,
      limit,
      populate: 'owner',
      sort: { createdAt: -1 }
    };
    const result = await Book.paginate({}, options);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if(!book) {
      res.status(404).json({error: 'Book not found'});
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

import Book from "../models/Book.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, genre, description, condition, owner, availabilitystatus, coverArtUrl } = req.body;
    const existingBook = await Book.findOne({ title, author, genre })

    if (existingBook) {
      res.status(400).json({errror: 'A book with the same title, author, and genre already exists'})
    }
    const newBook = new Book({
      title,
      author,
      genre,
      description,
      condition,
      owner,
      availabilitystatus,
      coverArtUrl
    })
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({error : 'Internal Server Error'});
  }
};

export const getAllBooks = async (req, res) => {
  res.status(200).json({ message: 'Get all Books' });
};

export const getBookById = async (req, res) => {
  res.status(200).json({ message: 'get a single book' });
};

export const updateBook = async (req, res) => {
  res.status(200).json({ message: 'updated a book successfully' });
};

export const deleteBook = async (req, res) => {
  res.status(200).json({ message: 'deleted a book successfully' });
};

import Book from "../models/Book.js";
import upload from "../middleware/fileUpload.js";

/*
export const createBook = async (req, res) => {
  try {
    // Use 'upload.single('coverArt')' as middleware to handle file upload
    upload.single('coverArt')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: 'File upload failed'});
      }

      try {
        const { title, author, genre, description, condition, owner, availabilityStatus, coverArtUrl } = req.body;
        const existingBook = await Book.findOne({ title, author, genre });

        if (existingBook) {
          return res.status(400).json({ error: 'A book with the same title, author, and genre already exists' });
        }
        const newBook = new Book({
          title,
          author,
          genre,
          description,
          condition,
          owner,
          availabilityStatus,
          coverArtUrl: err ? null : req.file.path
        })
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
*/

export const createBook = async (req, res) => {
  try {
    // Use 'upload.single('coverArt')' as middleware to handle file upload
    const multerMiddleware = upload.single('coverArt');
    
    multerMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: 'File upload failed' });
      }

      try {
        const { title, author, genre, description, condition, owner, availabilityStatus } = req.body;
        const existingBook = await Book.findOne({ title, author, genre });

        if (existingBook) {
          return res.status(400).json({ error: 'A book with the same title, author, and genre already exists' });
        }
        
        const newBook = new Book({
          title,
          author,
          genre,
          description,
          condition,
          owner,
          availabilityStatus,
          coverArtUrl: req.file ? req.file.path : null,
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if(!books) {
      res.status(404).json({error: 'Books not found!'})
    }
    res.status(200).json(books);
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

export const getAllBooks = async (req, res) => {
  res.status(200).json({ message: 'Get all Books' });
};

export const getBookById = async (req, res) => {
  res.status(200).json({ message: 'get a single book' });
};

export const createBook = async (req, res) => {
  res.status(200).json({ message: 'created a book successfully' });
};

export const updateBook = async (req, res) => {
  res.status(200).json({ message: 'updated a book successfully' });
};

export const deleteBook = async (req, res) => {
  res.status(200).json({ message: 'deleted a book successfully' });
};

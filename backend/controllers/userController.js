export const userLogin = async (req, res) => {
    res.status(200).json({ message: 'User logged in' });
  };

export const registerUser = async (req, res) => {
    res.status(200).json({ message: 'Regitered user successfully!' });
}

export const getUserById = async (req, res) => {
    res.status(200).json({ message: 'User fetched!' });
}

export const editUserDetails = async (req, res) => {
    res.status(200).json({ message: 'User details updated!' });
}

export const deleteUser = async (req, res) => {
    res.status(200).json({ message: 'User deleted successfully!' });
}
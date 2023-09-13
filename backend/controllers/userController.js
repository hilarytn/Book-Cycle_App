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

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User ${id} deleted!`);
    console.log(`User ${id} deleted!`);
}
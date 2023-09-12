export const createUser = (req, res) => {
    res.status(200).json({message: "created a new user"})   
}

export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    res.send(user);
    console.log(`User found: ${user}`);
}

export const editUserDetails = (req, res) => {
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
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User ${id} deleted!`);
    console.log(`User ${id} deleted!`);
}
import * as UsersDB from "../../db/users_db";


const bcrypt = require ('bcryptjs');
const SALT_ROUNDS = 10;

const signUp = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userExists = await UsersDB.foundUser(username);

        if (userExists) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await UsersDB.addUser(username, hash);

        req.session.id = newUser.id;
        req.session.username = newUser.username;

        return res.status(201).json({ message: 'User created' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export { signUp };
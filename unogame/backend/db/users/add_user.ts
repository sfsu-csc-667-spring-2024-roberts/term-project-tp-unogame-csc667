import { db } from "../connection";

const ADD_USER =  
"INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, username";

const addUser = (username, password) => db.one(ADD_USER,[username, password]);

export { addUser };
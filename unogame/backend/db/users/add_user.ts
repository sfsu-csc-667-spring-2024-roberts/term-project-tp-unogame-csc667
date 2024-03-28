import { db } from "../db_connection";

const ADD_USER =
  "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username";

const addUser = (username, password) => db.one(ADD_USER, [username, password]);

export { addUser };

import { db } from "../connection";

const FOUND_USER = "SELECT username FROM users WHERE username=$1";

const foundUser = (username: string): Promise<boolean> =>
  db
    .one(FOUND_USER, [username])
    .then(() => true) 
    .catch(() => false); 

export { foundUser };
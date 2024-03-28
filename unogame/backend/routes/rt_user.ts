import express from "express";
import { requestTime } from "../middleware/timestamp";
import * as Users from "../controllers/ctrl_users";

const router = express.Router();

router.use(requestTime);

router.post("/signup", Users.signUp);

export default router;

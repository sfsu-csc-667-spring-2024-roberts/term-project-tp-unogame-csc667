import express from "express";
import { requestTime } from "../middleware/timestamp";
import * as Users from "../controllers/users_controller";

const router = express.Router();

router.use(requestTime);

router.post("/signup", Users.signUp);

export default router;

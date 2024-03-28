import express from "express";
import { requestTime } from "../middleware/timestamp";

const router = express.Router();

router.use(requestTime);

// Todo

export default router;

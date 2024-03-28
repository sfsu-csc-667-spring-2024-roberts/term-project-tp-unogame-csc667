import express from "express";
import { db } from "../db/db_connection";

const router = express.Router();

router.get("/", async (_request, response) => {
  try {
    const _ = await db.any(
      `INSERT INTO test_table ("test_string") VALUES ($1)`,
      [
        `Hello on ${new Date().toLocaleDateString("en-us", {
          hour: "numeric",
          minute: "numeric",
          month: "short",
          day: "numeric",
          weekday: "long",
          year: "numeric",
        })}`,
      ]
    );

    const results = await db.any("SELECT * FROM test_table");

    response.json(results);
  } catch (error) {
    response.json({ error });
  }
});

export default router;

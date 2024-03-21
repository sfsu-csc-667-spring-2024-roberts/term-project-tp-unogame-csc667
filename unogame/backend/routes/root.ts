import express from "express";

const router = express.Router();

router.get("/", (_request, response) => {
  const name = "Class 667, Monday night";

  response.render("root", { name });
});

export default router;

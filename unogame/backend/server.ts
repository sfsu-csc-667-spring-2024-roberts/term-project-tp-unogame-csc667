import path from "path";
import express from "express";
import createError from "http-errors";
import rootRoutes from "./routes/root";
import testRoutes from "./routes/test";
import { setUpDevelopmentEnvironment } from "./utilities/set-up-development-environment";

const app = express();

const PORT = process.env.PORT || 3333;

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();

  setUpDevelopmentEnvironment();

  app.use(require('connect-livereload')({
    port: 35729
  }));
  
}

const morgan = require("morgan");

app.use(morgan("dev"));

app.set("views", path.resolve("views"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve("static")));

app.use("/", rootRoutes);
app.use("/tests", testRoutes);

app.use((_request, _response, next) => {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

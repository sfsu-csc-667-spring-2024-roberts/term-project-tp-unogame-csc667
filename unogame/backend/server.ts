import path from "path";
import express from "express";
import morgan from "morgan";

import cookieParser from "cookie-parser";

import * as Routes from "./routes";
import { setUpDevelopmentEnvironment } from "./utilities/set-up-development-environment";

// not used for now
// import { setLocalSession } from "./middleware/set_session";
// import session from "express-session";
// import createError from "http-errors";

const app = express();

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();

  setUpDevelopmentEnvironment();

  app.use(
    require("connect-livereload")({
      port: 35729,
    })
  );
}

const PORT = process.env.PORT || 3333;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", path.resolve("views"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve("static")));

// app.use(setLocalSession);
// Todo, learn socket.io

app.use("/", Routes.root);
app.use("/test", Routes.test);
app.use("/user", Routes.user);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

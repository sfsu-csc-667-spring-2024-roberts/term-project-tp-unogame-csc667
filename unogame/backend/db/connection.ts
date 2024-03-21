import pgp from "pg-promise";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

let db;

try {
  db = pgp()(
    process.env.DATABASE_URL || "YOU_FORGOT_TO_SETUP_YOUR_ENVIRONMENT"
  );

  console.log(
    `Connected to db with connection string [${process.env.DATABASE_URL}]`
  );
} catch (error) {
  console.log("Unable to connect to database");
}

export { db };

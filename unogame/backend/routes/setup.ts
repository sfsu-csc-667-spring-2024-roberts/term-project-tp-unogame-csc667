import rootRoutes from "./root";
import testRoutes from "./test";

const configureRoutes = (app) => {
  app.use("/tests", testRoutes);
  app.use("/", rootRoutes);
};

export { configureRoutes };

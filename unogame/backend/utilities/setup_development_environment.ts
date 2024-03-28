import path from "path";
import livereload from "livereload";

const setUpDevelopmentEnvironment = () => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const reloadServer = livereload.createServer();
  reloadServer.watch(path.resolve("static"));
  reloadServer.server.once("connection", () => {
    setTimeout(() => {
      reloadServer.refresh("/");
    }, 100);
  });
};

export { setUpDevelopmentEnvironment };

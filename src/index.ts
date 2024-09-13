import express, { Express, Request, Response } from "express";
import env from "./config/LoadEnv";
import testRouter from "./router/TestRouter";
import initializeSentry from "./utils/sentry/Sentry";

const app: Express = express();
const port = env.PORT || 80;
const sentry = initializeSentry(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sentry.Handlers.requestHandler());
app.use(sentry.Handlers.tracingHandler());

app.get("/", (_: Request, res: Response) => {
  res.send("Schematics 2024 API");
});

app.use("/api/", testRouter);

app.use(sentry.Handlers.errorHandler());
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.get("/sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

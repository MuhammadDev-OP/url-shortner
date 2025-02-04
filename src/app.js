import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes import

import urlRouter from "./routes/url.routes.js";

// app.use("/api/v1/urls", urlRouter);

app.use("/api/urls", urlRouter);

export { app };

import express from "express";

import router from "./routes/router.js";

import { connectDB } from "./config/db.js";

import dotenv from "dotenv";

import limite from "./middleware/ratelimiter.js";

import cors from "cors";

dotenv.config(); 

const app = express();

const PORT = process.env.NEXT_PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://darshankardil-create.github.io",
    ],
  }),
);

app.use(express.json());


app.use((req, res, next) => {
  console.log(
    `we just got req. meathod is ${req.method} and url is ${req.url} of req`,
  );

  next();
});

app.set("trust proxy", 1);
app.use(limite);

app.use("/api/notes", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server:", PORT);
  });
});

import express from "express";

import router from "./routes/router.js";

import { connectDB } from "./config/db.js";

import dotenv from "dotenv";

import limite from "./middleware/ratelimiter.js";

import cors from "cors";


dotenv.config(); //After calling dotenv.config() in app.js you can access these variables anywhere in your Node.js code using process.env:

const app = express();

const PORT = process.env.NEXT_PORT || 3000;




  app.use(
    cors({                                                   
      origin:[https://darshankardil-create.github.io,http://localhost:3001]

//dont put slash at url end
      // file:///Users/sanjaykardile/Downloads/Cors%20Cookies%20Summary.pdf //open in browser
    })
  );


app.use(express.json()); // help us to get acces to req.body  // https://chatgpt.com/share/6933dd0a-503c-8005-b96e-b3c41e15aad5

//app.use(express.json()) is called as middleware

app.use((req, res, next) => {
  console.log(
    `we just got req. meathod is ${req.method} and url is ${req.url} of req`
  ); //compulsory must be placed after middleware to get info info about req in console

  next();
});

app.use(limite);

app.use("/api/notes", router);



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server:", PORT);
  });
});

//.env url is called enviroment variable

import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connectDb.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.port || 8080, () => {
      console.log(`🟢💨👟 Server os running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(`MongoDB connection failed ${err}`));

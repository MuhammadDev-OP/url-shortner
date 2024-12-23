import mongoose from "mongoose";
import { DB_CRED } from "../constant.js";

const connectDB = async () => {
  try {
    const connectInst = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_CRED}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectInst.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Error", error);
    process.exit(1);
  }
};

export default connectDB;

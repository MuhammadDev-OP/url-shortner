import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectInst = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectInst.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Error", error);
    process.exit(1);
  }
};

export default connectDB;

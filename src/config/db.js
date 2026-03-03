import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_MONGOURL);
    console.log(" MONGO DB CONNECTED SUCESSFULLY SUCESSFULLY SUCESSFULLY ");
  } catch (error) {
    console.error(
      "ERROR CONNECTING TO MONGO DB FAILED! FAILED! FAILED!",
      error
    );
    process.exit(1); 
  }
};


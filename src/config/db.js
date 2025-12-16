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
    process.exit(1); //exit with failiure
  }
};

//user1
//darshan@1965 || darshan%401965

//                          try {

//                                       }

//                          catch (error) {

//                                     }

import mongoose from "mongoose";

const noteSc = new mongoose.Schema(
  {    //mongoose.Schema accept only two object
    title: {
      type: String,
      required: true,
    
    },

    content: {
      type: String,
      required: true, 
     
    },
  }
  
  
  ,



  { timestamps: true }  //createdate , updatedate  strict:false allows all req.body to be saved in mongo db by default it is true
);

const Note = mongoose.model("noteis", noteSc);

export default Note;

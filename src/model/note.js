import mongoose from "mongoose";

const noteSc = new mongoose.Schema(
  {
 
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
    array: [{ type: Object }],
  },

  { timestamps: true }, 
);

const Note = mongoose.model("noteis", noteSc);

export default Note;

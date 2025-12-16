import mongoose from "mongoose";

const noteSc = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true } //createdate , updatedate
);

const Note = mongoose.model("noteis", noteSc);

export default Note;

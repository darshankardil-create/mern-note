import Notes from "./../model/note.js";

console.log(Notes);

export async function getall(_, res) {
  try {
   

    const noteisthere = await Notes.find().sort({ createdAt: -1 });
    res.status(200).json({
      noteisthere: noteisthere,
      message: "successfully got note with id",
    }); 
  } catch (error) {
    console.error("error in getall", error);

    res.status(500).json({ message: "Internal server error aha" });
  }
}

export async function getbyid(req, res) {
  try {
    const n = await Notes.findById(req.params.idd);

    if (!n) {
      return res.status(404).json({ message: "id not found" });
    }

    res.status(200).json({ message: "successfuly get the data by id", n: n });
  } catch (error) {
    console.error("erro in getting note by id ", error);
    res.status(500).json({ message: "internal server error aha" });
  }
}

export async function postall(req, res) {
  try {
    const { title, content } = req.body; 
    const newNote = new Notes({ title, content }); 

    await newNote.save();
    res.status(200).json({ message: "Note created sucessfuly" });
  } catch (error) {
    console.error({ message: "erro in creating note controller" }, error);
    res.status(500).json({ message: "internal server error aha" });
  }
}

export const deleteall = async (req, res) => {
  try {
    const deletenoteid = await Notes.findByIdAndDelete(req.params.idd);
    if (!deletenoteid) {
      return res.status(404).json({ message: "id not found" });
    }

    res.status(200).json("deleted note sucessfully");
  } catch (error) {
    console.error("erro in deleting note controller", error);
    res.status(500).json({ message: "internal server error aha" });
  }
};

export const putall = async (req, res) => {
  try {
    const { title, content } = req.body;

    const noteid = await Notes.findByIdAndUpdate(
      req.params.idd,
      { title, content },
      { new: true },
    );

    if (!noteid) {
      return res.status(404).json({ message: "id not found" });
    }

    res
      .status(200)
      .json({ message: "updated note successfully", noteid: noteid }); 
  } catch (error) {
    console.error("erro in updating note controller", error);
    res.status(500).json({ message: "internal server error aha" });
  }
};

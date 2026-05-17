const notes =
  require("../data/notes");


// ADD NOTE

function addNote(req, res) {

  const {
    title,
    content
  } = req.body;

  if (!title || !content) {

    return res.status(400).json({
      message: "Fill all fields"
    });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    content
  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note added",
    note: newNote
  });
}


// GET ALL NOTES

function getNotes(req, res) {

  res.json(notes);
}


// GET SINGLE NOTE

function getSingleNote(req, res) {

  const id =
    Number(req.params.id);

  const note =
    notes.find(
      note => note.id === id
    );

  if (!note) {

    return res.status(404).json({
      message: "Note not found"
    });
  }

  res.json(note);
}


// DELETE NOTE

function deleteNote(req, res) {

  const id =
    Number(req.params.id);

  const noteIndex =
    notes.findIndex(
      note => note.id === id
    );

  if (noteIndex === -1) {

    return res.status(404).json({
      message: "Note not found"
    });
  }

  notes.splice(noteIndex, 1);

  res.json({
    message: "Deleted"
  });
}

module.exports = {
  addNote,
  getNotes,
  getSingleNote,
  deleteNote
};
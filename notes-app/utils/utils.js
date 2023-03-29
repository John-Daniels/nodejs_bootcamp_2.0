const fs = require("fs");
const path = require("path");
const noteJsonPath = path.resolve(__dirname, "../notes.json");

const readNotes = () => {
  const notesJSON = fs.readFileSync(noteJsonPath, "utf-8");
  const notes = JSON.parse(notesJSON);
  return notes;
};

const writeNotes = (data) => {
  fs.writeFileSync(noteJsonPath, JSON.stringify(data), "utf-8");
  return data;
};

const addNote = (note) => {
  const notes = readNotes();
  notes.push(note);

  writeNotes(notes);
  console.log(`Succesfully added ${note.title}`);
};

module.exports = {
  addNote,
};

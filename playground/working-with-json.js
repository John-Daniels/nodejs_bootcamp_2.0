const fs = require("fs");
const path = require("path");

const notesJsonDir = path.resolve(__dirname, "./notes.json");

const noteJson = fs.readFileSync(notesJsonDir, "utf-8");
// console.log(noteJson);
let notes = JSON.parse(noteJson);

const newNote = {
  title: "My Sixth Note",
  body: "This is my Sixth note",
};

const newNote2 = {
  title: "My Seventh Note",
  body: "This is my Seventh note",
};

notes.push(newNote);
notes.push(newNote2);

notes.map((note, i) => {
  console.log(i, note.title, note.body);
});

// note, b4 saving any javascript object...
// convert back to json string

const notesReadyToUpload = JSON.stringify(notes);
fs.writeFileSync(notesJsonDir, notesReadyToUpload);

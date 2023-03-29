const fs = require("fs");

// read a json file
const notesJSON = fs.readFileSync("notes.json", "utf-8");
const notes = JSON.parse(notesJSON);

// notes.map((note) => console.log(note.title));
// const newNote = {
//   title: "Peter & Paul tales",
//   body: "History of Peter & Paul",
// };

// notes.push(newNote);

// remove something from array
// filter

// const filteredNotes = notes.filter(
//   (note) => note.title !== "Peter & Paul tales" //predicate
// );
// console.log(filteredNotes);

// const updateNotesJSON = JSON.stringify(notes);
// fs.writeFileSync("notes.json", updateNotesJSON, "utf-8");

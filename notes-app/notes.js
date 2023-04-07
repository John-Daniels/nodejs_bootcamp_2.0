#!/usr/bin/env node
const yargs = require("yargs");
yargs.version("v1.0.0-alpha");

const fs = require("fs");
const path = require("path");

const notesJsonDir = path.resolve(__dirname, "./notes.json");

// create a new command
yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(argv.title);
    console.log(argv.body);

    // feature -> adds notes.
    const notesJson = fs.readFileSync(notesJsonDir, "utf-8");
    const notes = JSON.parse(notesJson);

    const newNote = {
      title: argv.title,
      body: argv.body,
    };

    // Task 1
    // model the notes to have an id => use the uuid package generate uniques for each note.

    notes.push(newNote);
    //  writeFile
    const updateNotes = JSON.stringify(notes);
    fs.writeFileSync(notesJsonDir, updateNotes);
    console.log(`Successfully added ${argv.title}`);
  },
});

// create a command that removes a note - [x]
// use the command setup options used in the add command - [x]
// output this 'succesfully removed [node_name]' - [ ]

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    const title = argv.title;
    // reading the note.json file
    const notesJson = fs.readFileSync(notesJsonDir, "utf-8");
    // parse the note.json
    let notes = JSON.parse(notesJson);
    // find the note with the title
    // remove the note from the array
    notes = notes.filter((note) => note.title !== title); // note.title !== title => predicate
    // save the note back to the database [notes.json]
    const updatedNotes = JSON.stringify(notes); // convert notes array to a json string
    fs.writeFileSync(notesJsonDir, updatedNotes);
    console.log(`Succesfully Removed ${title}!`);

    // Task 2
    // throw an error to the user if the title is not found! 404
  },
});

// Task 3
// List all notes

// Task 4
// Read a note by its title

// parse your command
yargs.parse();

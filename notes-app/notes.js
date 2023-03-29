#!/usr/bin/env node
const yargs = require("yargs");
yargs.version("v1.0.0-beta");

const fs = require("fs");
const { addNote } = require("./utils/utils");

yargs.command({
  command: "add",
  describe: "Add a new note",
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
  handler(argv) {
    const note = {
      title: argv.title,
      body: argv.body,
    };

    addNote(note);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note by title",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const notesJSON = fs.readFileSync(noteJsonPath, "utf-8");
    let notes = JSON.parse(notesJSON);

    const title = argv.title;
    notes = notes.filter((note) => note.title !== title);

    fs.writeFileSync(noteJsonPath, JSON.stringify(notes), "utf-8");
    console.log(`Removed ${argv.title}!`);
  },
});

yargs.parse();

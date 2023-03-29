#!/usr/bin/env node
const yargs = require("yargs");
yargs.version("v1.1.0-beta"); // setting your cmd version.

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
    console.log("Adding a new note!");
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(`Removing ${argv.title}`);
  },
});

yargs.parse();

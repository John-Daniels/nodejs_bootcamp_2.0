#!/usr/bin/env node
const yargs = require("yargs");
yargs.version("v1.1.0-beta"); // setting your cmd version.

yargs.command({
  command: "add",
  describe: "Add a new note!",
  handler: function () {
    console.log("Adding a new note!");
  },
});



// Challange 1
// 1.) Use Yargs to handle a command that removes a note
// 2.) console.log("Removing a note...") for the handler
// 5mins...







yargs.parse();


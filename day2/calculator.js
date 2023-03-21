const chalk = require("chalk");
const log = require("./logger");
const { add, subtract } = require("./math");

log(add(10, 5)); // 15
log(subtract(7, 2)); // 5
log(subtract(7, 2) + add(15, 5)); // 5

log("We have successfully added and subtracted");

// challange 2
//  work on a js file named logger
// log out information
// make the function reusable from any other module
// 1) creating a logger function
// 2) export the it out
// 3) import in another file...
// 4) update `console.log(subtact(7, 2))`

// import & export our own custom modules

// console.log(chalk.red("This log will be red!"));
// challange 3
// goto your logger and update the
// console.log to make use of chalks methods.
// choose a color of your choice.

// Global Modules
// npm i module_name -g

// Dev Dependencies
// npm i module_name --save-dev
// npm i module_name -D

// Scripts
// npm run [script_name]
// e.g react -> npm start

// challenge 4
// 1) create a script named `postinstall`
// 2) setting to this comman `npm install`

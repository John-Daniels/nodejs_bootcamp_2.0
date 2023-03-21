// File system & command line args

// console.log(process.argv);

// try to use process.argv and different arguments
// 3 min

// if (command === "add") {
//   console.log("Adding results........");
// } else if (command === "remove") {
//   console.log("Removing results........");
// }

// Challenge 1
// 1) make use of the command line arguments. - [x]
// 2) make simple calculator, that makes use of these arguments - [x]
// 3) addition & subtraction & multiplication; - [x]
// Tip - make use of the same modules created in your last assignment.

const math = require("../day2/math");
const log = require("../day2/logger");
const calculate = require("./logic");

const operation = process.argv[2];
const num1 = process.argv[3];
const num2 = process.argv[4];

const x = parseInt(num1);
const y = parseInt(num2);

console.log("Welcome to my Calculator App!");

if (x && y) {
  calculate(operation, x, y);
} else {
  log("Please input two numbers!");
}

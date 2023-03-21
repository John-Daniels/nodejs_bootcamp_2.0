const math = require("../day2/math");
const log = require("../day2/logger");

const calculate = (operation, x, y) => {
  if (operation === "add") {
    // addition
    console.log(`Addition of ${x} and ${y}`);
    console.log(math.add(x, y));
  } else if (operation === "subtract") {
    //subtraction
    console.log(`Subtraction of ${x} and ${y}`);
    console.log(math.subtract(x, y));
  } else if (operation === "multiply") {
    // multiplication
    console.log(`Multiplication of ${x} and ${y}`);
    console.log(math.multiply(x, y));
  } else {
    log("Please Enter your operation!");
  }
};

// i can specify an operation to be performed;
//

module.exports = calculate;

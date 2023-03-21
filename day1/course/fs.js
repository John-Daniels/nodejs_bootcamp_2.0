const fs = require("fs"); // commonJS

// reading a file
// const testFile = fs.readFileSync("test.txt", "utf-8");
// console.log(testFile);

// fs.mkdirSync("docs"); // making a directory/folder
// writing a file
fs.writeFileSync("../docs/test.txt", "The Node.js Class has 9 students!", {
  encoding: "utf-8",
  flag: "a",
});

// fs.rmdirSync("node"); // removing a directory/folder

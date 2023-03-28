const fs = require("fs");
const path = require("path");
const fileToRead = process.argv[2];
const fileToWrite = process.argv[3];

const fileToReadPath = path.resolve(__dirname, fileToRead);
const fileToWritePath = path.resolve(__dirname, fileToWrite);

try {
  const contents = fs.readFileSync(fileToReadPath, "utf-8");

  fs.writeFileSync(fileToWritePath, contents);
  console.log("Successfully copied the contents");
} catch (e) {
  console.log("An Error occurred your file doesn't exist!");
}

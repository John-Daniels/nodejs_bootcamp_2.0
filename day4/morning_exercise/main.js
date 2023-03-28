const fs = require("fs");
const path = require("path");
const fileName = process.argv[2];

const filePath = path.resolve(__dirname, fileName);

try {
  const contents = fs.readFileSync(filePath, "utf-8");
  console.log(contents);
} catch (e) {
  console.log("File Doesnt Exist!");
}

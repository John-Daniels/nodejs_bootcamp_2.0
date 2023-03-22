const fs = require("fs");
const path = require("path");

const fileName = process.argv[2];
const content = process.argv[3];

// console.log(fileName, content);
// nodejs filesystem

const writefile = () => {
  // validation
  if (fileName !== undefined)
    return console.error("Please provide a file name!");
  if (!content)
    return console.error(`
  Please provide some content to write!
  
  - To use this command you must follow this guide;
  bash> node writefile [filename] [content]
  `);

  const fileDir = path.resolve(__dirname, fileName);
  fs.writeFileSync(fileDir, content, "utf-8");

  console.log(`Successfully wrote ${content} to ${fileDir}`);
};

writefile();

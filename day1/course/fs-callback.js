const fs = require("fs");
// callback example
fs.readFile("./ddocs/test.txt", "utf-8", (err) => {
  if (err) return console.log("Error occured!", err);

  console.log("Succesfully saved the file");
});

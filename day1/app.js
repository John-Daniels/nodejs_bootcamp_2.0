const { readFile } = require("fs/promises"); // commonJS
const path = require("path");

console.log(__dirname);
console.log(__filename);

// async/await - Promise Example
// readFile("./docs/test.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log("An Error Occured", err));

const testFilePath = path.join(__dirname, "docs", "test.txt");
const testFilePath2 = path.resolve(__dirname, "../../Users");
console.log(1, testFilePath);
console.log(2, testFilePath2);
// './docs/test.txt'
const main = async () => {
  try {
    const data = await readFile(testFilePath, "utf-8");
    console.log(data);
  } catch (e) {
    console.log(e);
  }

  console.log("finally here!");
};

// main();

// fs
// path

//  Your First Node Challenge!
// 1.) create a directory named proposals
// 2.) append a file named `backend_proposal.txt` and then input some data into it.
// 3.) use the path module to allocate each file path used above
// 4.) replicate the example creating a file synchronously
// 5.) replicate the example creating a file asynchronously

/// 8mins.

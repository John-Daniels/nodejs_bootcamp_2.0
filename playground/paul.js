const myName = "Paul";
const test = "new test";
// console.log(myName + test);

// reading the errors
// console.log()
// node inspect filename

export const generateRandomNumber = () => {
  return Math.round(Math.random() * 150 + Math.random() * 12);
};

debugger;
/// do opeation
const user = {
  id: generateRandomNumber(),
  name: myName,
  age: generateRandomNumber(),
};

// console.log(user);
// module.exports = { generateRandomNumber };

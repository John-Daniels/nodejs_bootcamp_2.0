import { generateRandomNumber } from "./paul.js";

const prepareMeal = (name) => {
  return new Promise((resolve, reject) => {
    const isReady = generateRandomNumber();

    if (!name) return reject("Please enter a meal's name!");

    if (isReady > 60) {
      resolve(`Successfully prepared ${name}`);
    } else {
      reject(`Can't place an order Right now!`);
    }
  });
};

// prepareMeal("Pizza");
const main = async () => {
  const meal = process.argv[2];

  try {
    const myMeal = await prepareMeal(meal);
    console.log(myMeal);
  } catch (e) {
    console.log(e);
  }
};

main();

// creating a promise
const myPromise = () =>
  new Promise((resolve, reject) => {
    const randomNum = generateRandomNumber();

    if (randomNum > 50) {
      resolve("Here your data");
    } else {
      reject("An Error has occurred!");
    }
  });
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

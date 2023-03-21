const chalk = require("chalk");

const logger = (message) => {
  console.log(chalk.red(`[calculator]: ${message}`));
};

module.exports = logger;

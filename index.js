var chalk = require("chalk");

var message = chalk.bold.bgCyan("Hello " + chalk.yellow("world"));
console.log(message);

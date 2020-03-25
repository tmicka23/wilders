const chalk = require("chalk");

const wilders = ["Baptiste", "Amélie", "Abdel", "Anaïs"];
const colors = ["blue", "green", "magenta", "yellow"];

const colorizeWilders = (arr, colors) => {
  for (let i = 0; i < wilders.length; i++) {
    console.log(chalk[colors[i]](arr[i]));
  }
};

colorizeWilders(wilders, colors);

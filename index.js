const { dataOfNames } = require("./dataSet");

function getRandomMaleName() {
  const randomNumber = Math.floor(Math.random() * dataOfNames.male.length);
  return dataOfNames.male[randomNumber];
}

function getRandomFemaleName() {
  const randomNumber = Math.floor(Math.random() * dataOfNames.female.length);
  return dataOfNames.female[randomNumber];
}

module.exports = { getRandomMaleName, getRandomFemaleName };

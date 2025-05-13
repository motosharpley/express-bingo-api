// ****** IMPORTS FOR TESTING ONLY *******

const RNG = {};

RNG.getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  num = Math.random() * (max - min + 1) + min;
  return Math.round(num);
};

module.exports = RNG;

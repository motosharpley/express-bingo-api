/**
 * Generates random numbers for the game.
 *
 * This module provides utility functions to generate random numbers
 * within a specified range, ensuring fairness and unpredictability
 * in the game mechanics.
 */

const RNG = {};

RNG.getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  num = Math.random() * (max - min + 1) + min;
  return Math.round(num);
};

// Get an array of random numbers for a within given range and count
RNG.getRandomNumbers = function (min, max, count) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(RNG.getRandomNumber(min, max));
  }
  return numbers;
};

module.exports = RNG;

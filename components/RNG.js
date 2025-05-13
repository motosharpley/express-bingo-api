/**
 * Generates a random integer between the specified range (inclusive).
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 * @throws {Error} If min or max is not a number, or if min > max.
 */
function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both min and max must be numbers.');
  }
  if (min > max) {
    throw new Error('min must be less than or equal to max.');
  }

  const random = Math.random() * (max - min + 1) + min;
  return Math.trunc(random);
}

/**
 * Generates an array of random integers between the specified range (inclusive).
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {number} count - The number of random integers to generate.
 * @returns {number[]} An array of random integers between min and max (inclusive).
 * @throws {Error} If min or max is not a number, or if min > max, or if count is not a positive integer.
 */
function getRandomArray(min, max, count) {
  if (
    typeof min !== 'number' ||
    typeof max !== 'number' ||
    typeof count !== 'number'
  ) {
    throw new Error('min, max, and count must all be numbers.');
  }
  if (min > max) {
    throw new Error('min must be less than or equal to max.');
  }
  if (count <= 0 || !Number.isInteger(count)) {
    throw new Error('count must be a positive integer.');
  }

  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(getRandomNumber(min, max));
  }
  return randomNumbers;
}

module.exports = { getRandomNumber, getRandomArray };

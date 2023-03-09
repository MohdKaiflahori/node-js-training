/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} return sum of a and b
 */
const addition = (a, b) => a + b;
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} return subtraction of a and b
 */
const subtraction = (a, b) => a - b;
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} return multiply of a and b
 */
const multiply = (a, b) => a * b;

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} return division of a and b
 */
const division = (a, b) =>  a / b;
/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} return modulas of a and b
 */
const modulus = (a, b) => a % b;

module.exports = {
    addition,
    subtraction,
    multiply,
    division,
    modulus,
}

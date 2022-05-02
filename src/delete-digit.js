const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n);
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i + 1] || i == arr.length-1){
      let newArr = arr.replace(arr[i],'');
      return Number(newArr);
    } 
  }
}
module.exports = {
  deleteDigit
};

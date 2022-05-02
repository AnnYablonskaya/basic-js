const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  else if( arr.length === 0){
    return [];
  }
 for (let i = 0; i < arr.length; i++){
   switch(arr[i]){
     case "--discard-next":
       i +=2;
       break;
      case "--discard-prev":
        newArr.pop();
        break;
      case "--double-next":
        newArr.push(arr[i+1]);
        break;
      case "--double-prev":
        newArr.push(arr[i - 1]); 
        break;
   }
 }
 return newArr;
}

module.exports = {
  transform
};

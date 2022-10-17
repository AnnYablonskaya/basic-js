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
  let fin = [];

  if (!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }else if( arr.length === 0){
    return [];
  }
  let array = [];
  let discardn = "--discard-next";
  let discardp = "--discard-prev";
  let doublen = "--double-next";
  let doublep = "--double-prev";
for (let i = 0; i < arr.length; i++){
  switch(arr[i]){
    case discardn:
      i ++;
      break;
      case discardp:
        array.pop();
        break;
      case doublen:
        if(arr[i + 1]){ array.push(arr[i + 1]);} 
        break;
      case doublep:
        if(array[i - 1]){ array.push(arr[i - 1]);} 
        break;
        default:
          array.push(arr[i]);
  }
}
return array;
}

module.exports = {
  transform
};


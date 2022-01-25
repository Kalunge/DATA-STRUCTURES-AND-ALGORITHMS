// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let result = [];

  for (let item of array) {
    if (
      !result[result.length - 1] ||
      result[result.length - 1].length === size
    ) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
  }
  return result
}

console.log(chunk([1, 2, 3, 4, 5], 2));

module.exports = chunk;

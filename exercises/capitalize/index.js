// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // let result = '';

  // for (let item of str.split(' ')) {
  //   result += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
  // }

  // return result.trim();

  // Alternate Solution

  let first = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      first += str[i].toUpperCase();
    } else {
      first += str[i];
    }
  }
  return first;
}
module.exports = capitalize;

console.log(capitalize('a short sentence'));

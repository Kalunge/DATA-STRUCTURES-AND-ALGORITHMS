// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Alternate Solution
function reverse(str) {
  return str.split("").reverse().join("")
}

// Alternate Solution
function reverse(str) {
  let result = ""
  for(let char of str) {
    result = char + result
  }
  return result
}

function reverse(str) {
  return str.split('').reduce((acc, char) => char + acc);
}

module.exports = reverse;

console.log(reverse('abcd'));

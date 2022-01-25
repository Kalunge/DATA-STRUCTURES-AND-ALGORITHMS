// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // let charMapA = {};
  // let charMapB = {};

  // for (let char of stringA.toLowerCase().replace(/[^\w]/g, '')) {
  //   charMapA[char] = charMapA[char] + 1 || 1;
  // }

  // for (let char of stringB.toLowerCase().replace(/[^\w]/g, '')) {
  //   charMapB[char] = charMapB[char] + 1 || 1;
  // }

  // if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
  //   return false;
  // }

  // for (char in charMapB) {
  //   if (charMapA[char] !== charMapB[char]) {
  //     return false;
  //   }
  // }


  // Alternate Solution
  const cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  };

  let cleanedA = cleanString(stringA);
  let cleanedB = cleanString(stringB);

  
  return cleanedA === cleanedB;
}

module.exports = anagrams;

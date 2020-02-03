const findLongestWord = function(string) {
  let array = string.split(' ');
  let longestWord = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord;
};

// Вызов
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

function findLongestWord(string = "") {
  // Write code under this line
  const stringSplit = string.split(" ");
  let longestWord = "";

  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'

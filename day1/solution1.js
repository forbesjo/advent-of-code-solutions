// string -> number
module.exports = function solve(input) {
  return input
    .split('')
    .filter(function(character) {
      return /\(|\)/.test(character);
    })
    .map(function(character) {
      return character === '(' ? 1 : character === ')' ? -1 : 0;
    })
    .reduce(function(acc, x) {
      return acc + x;
    }, 0);
};

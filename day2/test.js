var
  assert = require('assert'),
  fs = require('fs'),
  solve = require('./solution');

describe('day2', function() {
  describe('part1', function() {
    it('A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.', function() {
      assert.equal(solve(['2x3x4']), 58);
    });

    it('A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.', function() {
      assert.equal(solve(['1x1x10']), 43);
    });

    it('solve the problem', function() {
      assert.equal(solve(fs.readFileSync('day2/input.txt').toString().split('\n')), 1598415);
    });
  });
});

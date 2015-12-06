var
  assert = require('assert'),
  fs = require('fs'),
  solve = require('./src');

describe('day1', function() {
  describe('part1', function() {
    it('(()) and ()() both result in floor 0.', function() {
      assert.equal(solve.day1part1('(())'), 0);
      assert.equal(solve.day1part1('()()'), 0);
    });

    it('((( and (()(()( both result in floor 3.', function() {
      assert.equal(solve.day1part1('((('), 3);
      assert.equal(solve.day1part1('(()(()('), 3);
    });

    it('))((((( also results in floor 3.', function() {
      assert.equal(solve.day1part1('))((((('), 3);
    });

    it('()) and ))( both result in floor -1 (the first basement level).', function() {
      assert.equal(solve.day1part1('())'), -1);
      assert.equal(solve.day1part1('))('), -1);
    });

    it('))) and )())()) both result in floor -3', function() {
      assert.equal(solve.day1part1(')))'), -3);
      assert.equal(solve.day1part1(')())())'), -3);
    });

    it('solve the problem', function() {
      assert.equal(solve.day1part1(fs.readFileSync('day1-input.txt').toString()), 74);
    });
  });

  describe('part2', function() {
    it(') causes him to enter the basement at character position 1.', function() {
      assert.equal(solve.day1part2(')'), 1);
    });

    it('()()) causes him to enter the basement at character position 5.', function() {
      assert.equal(solve.day1part2('()())'), 5);
    });

    it('solve the problem', function() {
      assert.equal(solve.day1part2(fs.readFileSync('day1-input.txt').toString()), 1795);
    });
  });
});

describe('day2', function() {
  describe('part1', function() {
    it('A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.', function() {
      assert.equal(solve.day2part1(['2x3x4']), 58);
    });

    it('A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.', function() {
      assert.equal(solve.day2part1(['1x1x10']), 43);
    });

    it('solve the problem', function() {
      assert.equal(solve.day2part1(fs.readFileSync('day2-input.txt').toString().split('\n')), 1598415);
    });
  });


describe('part2', function() {
    it('A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.', function() {
      assert.equal(solve.day2part2(['2x3x4']), 34);
    });

    it('A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.', function() {
      assert.equal(solve.day2part2(['1x1x10']), 14);
    });

    it('solve the problem', function() {
      assert.equal(solve.day2part2(fs.readFileSync('day2-input.txt').toString().split('\n')), 3812909);
    });
  });

});

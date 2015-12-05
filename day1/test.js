var
  assert = require('assert'),
  fs = require('fs'),
  solve1 = require('./solution1'),
  solve2 = require('./solution2');

describe('day1', function() {
  describe('part1', function() {
    it('(()) and ()() both result in floor 0.', function() {
      assert.equal(solve1('(())'), 0);
      assert.equal(solve1('()()'), 0);
    });

    it('((( and (()(()( both result in floor 3.', function() {
      assert.equal(solve1('((('), 3);
      assert.equal(solve1('(()(()('), 3);
    });

    it('))((((( also results in floor 3.', function() {
      assert.equal(solve1('))((((('), 3);
    });

    it('()) and ))( both result in floor -1 (the first basement level).', function() {
      assert.equal(solve1('())'), -1);
      assert.equal(solve1('))('), -1);
    });

    it('))) and )())()) both result in floor -3', function() {
      assert.equal(solve1(')))'), -3);
      assert.equal(solve1(')())())'), -3);
    });

    it('solve the problem', function() {
      assert.equal(solve1(fs.readFileSync('day1/input.txt').toString()), 74);
    });
  });

  describe('part2', function() {
    it(') causes him to enter the basement at character position 1.', function() {
      assert.equal(solve2(')'), 1);
    });

    it('()()) causes him to enter the basement at character position 5.', function() {
      assert.equal(solve2('()())'), 5);
    });

    it('solve the problem', function() {
      assert.equal(solve2(fs.readFileSync('day1/input.txt').toString()), 1795);
    });
  });
});

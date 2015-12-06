var
  assert = require('assert'),
  _ = require('./helpers');

describe('helpers', function() {
  it('min', function() {
    assert.equal(_.min([3, 1, 2]), 1, 'multiple unsorted items');
    assert.equal(_.min([3]), 3, 'one item');
    assert.equal(_.min([]), undefined, 'empty list');
  });

  it('sum', function() {
    assert.equal(_.sum([3, 1, 2]), 6, 'multiple items');
    assert.equal(_.sum([3]), 3, 'one item');
    assert.equal(_.sum([]), 0, 'empty list');
  });

  it('pairs', function() {
    assert.deepEqual(_.pairs([3, 1, 2]), [
      [3, 1],
      [3, 2],
      [1, 2]
    ], 'list of pairs');

    assert.deepEqual(_.pairs([3, 1, 1]), [
      [3, 1],
      [3, 1],
      [1, 1]
    ], 'list of pairs with duplicates');

    assert.deepEqual(_.pairs([3]), [], 'cannot make pairs');

    assert.deepEqual(_.pairs([]), [], 'empty list');
  });

  it('group', function() {
    assert.deepEqual(_.group(['a']), {
      a: 1
    }, 'no duplicates');

    assert.deepEqual(_.group(['a', 'b', 'c', 'c', 'b', 'c']), {
      a: 1,
      b: 2,
      c: 3
    }, 'duplicates');

    assert.deepEqual(_.group([]), {}, 'none');
  });

  it('move', function() {
    assert.deepEqual(_.move({
      x: 0,
      y: 0
    }, 'v'), {
      x: 0,
      y: -1
    }, 'down');

    assert.deepEqual(_.move({
      x: 0,
      y: 0
    }, '>'), {
      x: 1,
      y: 0
    }, 'right');

    assert.deepEqual(_.move({
      x: 0,
      y: 0
    }, '<'), {
      x: -1,
      y: 0
    }, 'left');

    assert.deepEqual(_.move({
      x: 0,
      y: 0
    }, '^'), {
      x: 0,
      y: 1
    }, 'up');

    assert.deepEqual(_.move({
      x: 0,
      y: 0
    }, 'z'), {
      x: 0,
      y: 0
    }, 'invalid');
  });

  it('divide', function() {
    assert.deepEqual(_.divide([0, 1, 2, 3], function(x) {
      return x === 2;
    }), {
      included: [2],
      excluded: [0, 1, 3]
    }, 'mix');

    assert.deepEqual(_.divide([0, 1, 2, 3], function(x, i) {
      return i % 2;
    }), {
      included: [1, 3],
      excluded: [0, 2]
    }, 'mix index');

    assert.deepEqual(_.divide([0, 1, 2, 3], function() {
      return true;
    }), {
      included: [0, 1, 2, 3],
      excluded: []
    }, 'only includes');

    assert.deepEqual(_.divide([0, 1, 2, 3], function(x) {
      return false;
    }), {
      included: [],
      excluded: [0, 1, 2, 3]
    }, 'only excludes');
  });

  it('track', function() {
    assert.deepEqual(_.track(['>', '>', '<', 'v']), ['0,0', '1,0', '2,0', '1,0', '1,-1'], '');
  });
});

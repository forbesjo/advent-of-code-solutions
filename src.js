var _ = require('./helpers');

module.exports = {
  // string -> number
  day1part1: function(input) {
    return input
      .split('')
      .map(function(c) {
        return c === '(' ? 1 : c === ')' ? -1 : 0;
      })
      .reduce(function(acc, x) {
        return acc + x;
      }, 0);
  },

  // string -> number
  day1part2: function(input) {
    return input
      .split('')
      .map(function(c) {
        return c === '(' ? 1 : c === ')' ? -1 : 0;
      })
      .reduce(function(acc, x) {
        acc.push(acc[acc.length - 1] + x);
        return acc;
      }, [0])
      .indexOf(-1);
  },

  // string[] -> number
  day2part1: function(input) {
    return _.sum(input
      .filter(function(x) {
        return x;
      })
      .map(function(dimensions) {
        var
          surfaceAreas = _.pairs(dimensions.split('x')).map(function(pair) {
            return pair[0] * pair[1];
          }),

          totalSurfaceArea = _.sum(surfaceAreas.map(function(x) {
            return x * 2;
          }));

        return totalSurfaceArea + _.min(surfaceAreas);
      }));
  },

  // string[] -> number
  day2part2: function(input) {
    return _.sum(input
      .filter(function(x) {
        return x;
      })
      .map(function(dimensions) {
        var
          edges = dimensions.split('x').map(function(x) {
            return x * 1;
          }),

          shortestEdge = _.min(edges),

          shortestEdgeIndex = edges.indexOf(shortestEdge),
          shortEdge = _.min(edges.filter(function(x, i) {
            return i !== shortestEdgeIndex;
          })),

          wrap = (2 * shortestEdge) + (2 * shortEdge),

          bow = edges.reduce(function(x, y) {
            return x * y;
          }, 1);

        return wrap + bow;
      }));
  },

  // string -> number
  day3part1: function(input) {
    return Object.keys(_.group(input
      .split('')
      .reduce(function(acc, direction) {
        var prevPos = acc[acc.length - 1];
        acc.push(_.move(prevPos, direction));
        return acc;
      }, [{
        x: 0,
        y: 0
      }])
      .map(function(pos) {
        return pos.x + ',' + pos.y;
      }))).length;
  }
};

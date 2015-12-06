// number[] -> number
function min(list) {
  if (list.length)
    return list.reduce(function(acc, x) {
      return x < acc ? x : acc;
    }, list[0]);
}

// number[] -> number
function sum(list) {
  return list.reduce(function(acc, x) {
    return x + acc;
  }, 0);
}

// any[] -> any[][]
function pairs(list) {
  return list.reduce(function(allPairs, element, index) {
    if (index !== list.length - 1) {
      return allPairs.concat(list.slice(index + 1).reduce(function(acc, x) {
        acc.push([element, x]);
        return acc;
      }, []));
    }

    return allPairs;
  }, []);
}

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
    return sum(input
      .filter(function(x) {
        return x;
      })
      .map(function(dimensions) {
        var
          surfaceAreas = pairs(dimensions.split('x')).map(function(pair) {
            return pair[0] * pair[1];
          }),

          totalSurfaceArea = sum(surfaceAreas.map(function(x) {
            return x * 2;
          }));

        return totalSurfaceArea + min(surfaceAreas);
      }));
  },

  // string[] -> number
  day2part2: function(input) {
    return sum(input
      .filter(function(x) {
        return x;
      })
      .map(function(dimensions) {
        var
          edges = dimensions.split('x').map(function(x) {
            return x * 1;
          }),

          shortestEdge = min(edges),

          shortestEdgeIndex = edges.indexOf(shortestEdge),
          shortEdge = min(edges.filter(function(x, i) {
            return i !== shortestEdgeIndex;
          })),

          wrap = (2 * shortestEdge) + (2 * shortEdge),

          bow = edges.reduce(function(x, y) {
            return x * y;
          }, 1);

        return wrap + bow;
      }));
  }
};

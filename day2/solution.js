// number[] -> number
function min(list) {
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

// a[] -> a[][]
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

// string[] -> number
module.exports = function solve(input) {
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
};

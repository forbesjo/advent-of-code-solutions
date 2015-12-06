module.exports = {
  // number[] -> number
  min: function(list) {
    if (list.length)
      return list.reduce(function(acc, x) {
        return x < acc ? x : acc;
      }, list[0]);
  },

  // number[] -> number
  sum: function(list) {
    return list.reduce(function(acc, x) {
      return x + acc;
    }, 0);
  },

  // any[] -> any[][]
  pairs: function(list) {
    return list.reduce(function(allPairs, element, index) {
      if (index !== list.length - 1) {
        return allPairs.concat(list.slice(index + 1).reduce(function(acc, x) {
          acc.push([element, x]);
          return acc;
        }, []));
      }

      return allPairs;
    }, []);
  },

  // string[] -> object
  group: function(list) {
    return list.reduce(function(acc, s) {
      acc[s] = acc[s] > 0 ? acc[s] + 1 : 1;
      return acc;
    }, {});
  },

  // string -> object
  move: function(prevPos, dir) {
    var
      x = 0,
      y = 0;

    if (dir === '>') {
      x = 1;
    }

    if (dir === '<') {
      x = -1;
    }

    if (dir === 'v') {
      y = -1;
    }

    if (dir === '^') {
      y = 1;
    }

    return {
      x: prevPos.x + x,
      y: prevPos.y + y
    };
  }
};

const removeFromArray = function (arr, ...args) {
  let newArr = arr;
  for (let i = 0; i < args.length; i++) {
    newArr = newArr.filter(function (el) {
      return el !== args[i];
    });
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

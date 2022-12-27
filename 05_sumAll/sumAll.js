const sumAll = function (a, b) {
  let finalSum = 0;
  if (typeof a === "number" && typeof b === "number" && a >= 0 && b >= 0) {
    if (a < b) {
      for (let i = a; i <= b; i++) {
        finalSum += i;
      }
    } else {
      for (let i = b; i <= a; i++) {
        finalSum += i;
      }
    }
  } else {
    return "ERROR";
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

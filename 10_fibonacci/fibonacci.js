const fibonacci = function (n) {
  let counter = [1];
  if (n < 0) {
    return "OOPS";
  } else {
    if (counter.length === 1) {
      counter.push(1);
      for (let i = 1; i < n; i++) {
        counter.push(counter[i] + counter[i - 1]);
      }
    } else {
      for (let i = 1; i < n; i++) {
        counter.push(counter[i] + counter[i - 1]);
      }
    }
  }
  return counter[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (str) {
  let counter = 0;
  const validatedStr = str
    .replace(/[!-.,]/g, "")
    .toLowerCase()
    .split(" ")
    .join("");
  const backwardStr = validatedStr.split("").reverse().join("");
  for (let i = 0; i < validatedStr.length; i++) {
    if (validatedStr[i] === backwardStr[i]) {
      counter++;
    }
  }
  return counter === validatedStr.length;
};

// Do not edit below this line
module.exports = palindromes;

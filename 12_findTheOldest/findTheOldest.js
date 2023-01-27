const findTheOldest = (arr) => {
  return arr.reduce((a, b) => {
    const aAge = getAge(a.yearOfBirth, a.yearOfDeath);
    const bAge = getAge(b.yearOfBirth, b.yearOfDeath);
    return aAge < bAge ? b : a;
  });
};

const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;

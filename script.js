// ========= Task-1 =========
const getAreaOfRightAngledTriangle = (a, b) => {
  const area = (a * b) / 2;

  return area;
};
const areaOfRightAngledTriangle = getAreaOfRightAngledTriangle(5, 3);

console.log(
  `The area of a right angled triangle: ${areaOfRightAngledTriangle}`
);

// ========= Task-2 =========
const getAreaOfCircle = (radius) => {
  const area = Math.PI * radius ** 2;

  return area;
};
const areaOfCircle = getAreaOfCircle(5);

console.log(`The area of a circle: ${areaOfCircle}`);

// ========= Task-3 =========
const getInvertedPyramid = (number) => {
  for (let i = number; i > 0; i--) {
    console.log("#".repeat(i));
  }
};
console.log("Inverted pyramid:");
getInvertedPyramid(4);

// ========= Task-4 =========
const getComb = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log("#");
    } else {
      console.log("#".repeat(number));
    }
  }
};
console.log("Comb:");
getComb(7);

// ========= Task-5 =========
const getRandomNumberFromRange = (number) => {
  if (number < 1 || number > 6) {
    return "Bad provided arg";
  }

  const min = 1;
  const max = 6;
  const randomNumber = Math.floor(Math.random() * max) + min;

  let numbersEqualOrNot;
  if (randomNumber === number) {
    numbersEqualOrNot = "Success";
  } else {
    numbersEqualOrNot = "You lost, try again";
  }

  return `Random number between ${min} and ${max}: ${randomNumber}. ${numbersEqualOrNot}`;
};

console.log(getRandomNumberFromRange(6));

// ========= Task-6 =========
const getSqure = (number) => {
  for (let i = 0; i < number; i++) {
    console.log("#".repeat(number));
  }
};
console.log("Square:");
getSqure(3);

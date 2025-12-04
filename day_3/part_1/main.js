import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const inputExample = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
];

const joltageArr = [];
let sum = 0;

// find the biggest digit (except the last digit)
// Math.max()
// IndexOf()
// find the second biggest digit after the first biggest digit
// Math.max()
// Concate

// or use "for" loop

for (const joltageRange of input) {
  let firstBiggestDigit = 0;
  let firstBiggestDigitIndex = 0;
  let secondBiggestDigit = 0;

  // Find First Digit
  for (let i = 0; i < joltageRange.length - 1; i++) {
    if (firstBiggestDigit < joltageRange[i]) {
      firstBiggestDigit = joltageRange[i];
      firstBiggestDigitIndex = i;
    }
  }
  //   Find Second Digit
  for (let i = firstBiggestDigitIndex + 1; i < joltageRange.length; i++) {
    if (secondBiggestDigit < joltageRange[i]) {
      secondBiggestDigit = joltageRange[i];
    }
  }

  // Concatenation
  joltageArr.push(parseInt(firstBiggestDigit + secondBiggestDigit));

  //   console.log(
  //     "first digit value: ",
  //     firstBiggestDigit,
  //     "first digit index: ",
  //     firstBiggestDigitIndex,
  //     "second digit value: ",
  //     secondBiggestDigit,
  //     "output: ",
  //     firstBiggestDigit + secondBiggestDigit
  //   );
}

for (const number of joltageArr) {
  sum += number;
}

console.log(sum);

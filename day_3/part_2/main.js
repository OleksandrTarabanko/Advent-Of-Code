import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const inputExample = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
];

let totalOutput = 0;

for (const joltageRange of input) {
  let finalCombination = "";
  let whitespaces = 11;
  let startIndex = 0;
  let currentArr = joltageRange
    .slice(startIndex, joltageRange.length - whitespaces)
    .split("")
    .map((digit) => parseInt(digit));

  //   for (let i = startIndex; i < currentArr.length; i++) {
  //     const biggestDigit = Math.max(...currentArr);
  //     startIndex = currentArr.indexOf(biggestDigit) + 1;
  //     whitespaces -= 1;
  //     finalCombination += biggestDigit;
  //     currentArr = joltageRange
  //       .slice(startIndex, joltageRange.length - whitespaces)
  //       .split("")
  //       .map((digit) => parseInt(digit));
  //   }

  while (finalCombination.length < 12) {
    const biggestDigit = Math.max(...currentArr);
    const digitIndex = currentArr.indexOf(biggestDigit);
    whitespaces -= 1;
    finalCombination += biggestDigit;
    startIndex = startIndex + digitIndex + 1;
    currentArr = joltageRange
      .slice(startIndex, joltageRange.length - whitespaces)
      .split("")
      .map((digit) => parseInt(digit));
    console.log(startIndex);
  }
  totalOutput += parseInt(finalCombination);
}

console.log(totalOutput);

// input 168027167146027
// inputExample 3121910778619

import * as fs from "fs";

const inputExample = ["3-5", "10-14", "16-20", "12-18"];
// const freshRangesExample = inputExample.map((range) =>
//   range.split("-").map(Number)
// );

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const dividePoint = input.findIndex((n) => n.trim() === "");
const freshRanges = input
  .slice(0, dividePoint)
  .map((range) => range.split("-").map(Number));

const finalSum = 0;

for (const [startPoint, endPoint] of freshRanges) {
  // You need to find which arrays you are allowed to merge into one if they have the same numbers
  // if (condition to merge) {
  //     merge arrray with another arrrays
  //     non - mergiblePart1 - arr1 = ...
  //     mergiblePart = ...
  //     non - mergiblePart2 - arr2 = ...
  //     finalSum += (non-mergedPart1-arr1).length + mergiblePart.length + (non-mergedPart2-arr2).length
  // } else {
  //     finalSum += arrray.length
  // }
}

console.log(ingredientIDs.length);

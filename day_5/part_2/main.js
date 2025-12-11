import * as fs from "fs";

// const inputExample = ["3-5", "10-14", "16-20", "12-18"];
// const freshRangesExample = inputExample.map((range) =>
//   range.split("-").map(Number)
// );

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const dividePoint = input.findIndex((n) => n.trim() === "");
const freshRanges = input
  .slice(0, dividePoint)
  .map((range) => range.split("-").map(Number));

let finalQuantity = 0;

// 1
freshRanges.sort((a, b) => a[0] - b[0]);
// 2
const mergedArr = [];
let [start, end] = freshRanges[0];

for (let i = 1; i < freshRanges.length; i++) {
  const [currentStart, currentEnd] = freshRanges[i];
  if (currentStart <= end) {
    end = Math.max(end, currentEnd);
  } else {
    mergedArr.push([start, end]);
    start = currentStart;
    end = currentEnd;
  }
}

// For the last range
mergedArr.push([start, end]);
console.log(mergedArr);
const uniqueCount = mergedArr.reduce(
  (acc, [start, end]) => acc + (end - start + 1),
  0
);
// console.log(uniqueCount);
// 1. Sort ranges from the smallest
// 2. Merge if possible and then finalQuantity += arr.length after loop
// 3. if merging not possible, then just skip this arr for merging and finalQuantity += notMergibleArray.length

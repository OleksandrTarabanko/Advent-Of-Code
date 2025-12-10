import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const dividePoint = input.findIndex((n) => n.trim() === "");

const freshRanges = input.slice(0, dividePoint);
const ingredients = input.slice(dividePoint + 1).map(Number);

const normalizedFreshRanges = freshRanges.map((range) =>
  range.split("-").map(Number)
);

let freshQuantity = 0;

for (const ingredient of ingredients) {
  for (const [startPoint, endPoint] of normalizedFreshRanges) {
    if (ingredient >= startPoint && ingredient <= endPoint) {
      freshQuantity++;
      break;
    }
  }
}

console.log(freshQuantity);

import * as fs from "fs";

let initialValue = 50;

let zeroTimes = 0;
const rotations = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const rotationsExample = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82",
];

for (const element of rotations) {
  const rotationValue = parseInt(element.slice(1));

  if (element.at(0) === "R") {
    initialValue = initialValue + rotationValue;

    while (initialValue >= 100) {
      initialValue = initialValue - 100;
    }

    if (initialValue === 0) {
      zeroTimes++;
    }
  } else {
    initialValue = initialValue - rotationValue;

    while (initialValue < 0) {
      initialValue = initialValue + 100;
    }

    if (initialValue === 0) {
      zeroTimes++;
    }
  }
}

console.log(zeroTimes);

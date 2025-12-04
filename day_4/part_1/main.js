import * as fs from "fs";
const rows = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const rowsExample = [
  "..@@.@@@@.",
  "@@@.@.@.@@",
  "@@@@@.@.@@",
  "@.@@@@..@.",
  "@@.@@@@.@@",
  ".@@@@@@@.@",
  ".@.@.@.@@@",
  "@.@@@.@@@@",
  ".@@@@@@@@.",
  "@.@.@@@.@.",
];

const neighborOffsets = [
  { x: -1, y: -1 },
  { x: +1, y: -1 },
  { x: +1, y: +1 },
  { x: -1, y: +1 },
  { x: 0, y: -1 },
  { x: 0, y: +1 },
  { x: -1, y: 0 },
  { x: +1, y: 0 },
];

const x = 0;
const y = 0;

function findCell(x, y) {
  // Do i need this?    x > rowsExample[0].length && y > rowsExample.length
  if (x < 0 && y < 0 && x > rowsExample[0].length && y > rowsExample.length) {
    return "Your cell is out of bounds";
  }
  return rowsExample[x][y];
}

function overwriteSymbol(arr, x, y) {}

function checkNeighbors(x, y) {
  let currentCell = findCell(x, y);
  console.log("currentCell: ", currentCell);
  if (currentCell === "@") {
    const paperNeighbors = [];
    for (const offSet of neighborOffsets) {
      const neighbor = findCell(x + offSet.x, y + offSet.y);
      if (neighbor === "@") {
        paperNeighbors.push(neighbor);
      }
    }
    if (paperNeighbors.length < 4) {
      currentCell = "X";
      // TODO You need to go to the rowsExample array and overwrite this cell form "@" to "X"
      console.log("currentCell: ", currentCell);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}

console.log(checkNeighbors(2, 6));
console.log(rowsExample);

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

function findCell(x, y) {
  if (x < 0 || y < 0 || x >= rows[0].length || y >= rows.length) {
    return;
  }
  return rows[y][x];
}

function transformRows() {
  const newRows = [...rows];
  for (let y = 0; y < rows.length; y++) {
    let newRow = rows[y];
    for (let x = 0; x < newRow.length; x++) {
      const currentCell = findCell(x, y);
      if (currentCell === "@") {
        let neighborsCount = 0;
        for (const offset of neighborOffsets) {
          const neighbor = findCell(x + offset.x, y + offset.y);
          if (neighbor === "@") {
            neighborsCount++;
          }
        }
        if (neighborsCount < 4) {
          // part before "x" + "x" + part after "x"
          newRow = newRow.substring(0, x) + "x" + newRow.substring(x + 1);
        }
      }
    }
    newRows[y] = newRow;
  }
  return newRows;
}

const finalRows = transformRows();

let xQuantity = 0;
for (const row of finalRows) {
  for (const element of row) {
    if (element === "x") {
      xQuantity++;
    }
  }
}

console.log("Total X quantity:", xQuantity);
